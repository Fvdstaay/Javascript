"use strict";


/**
 * Current display preferences.
 *
 * @typedef {Object} DisplaySettings
 * @property {"small"|"medium"|"large"} textSize Selected text size.
 * @property {"normal"|"high"} contrast Selected contrast mode.
 */

/** Accepted text size value */
const TEXT_SIZE_OPTIONS = Object.freeze([
    "small",
    "medium",
    "large"
]);
/**Accepted contrast values. */
const CONTRAST_OPTIONS = Object.freeze([
    "normal",
    "high"
]);

/**
 * initial settings when no preferences are available
 * 
 * @type {Readonly<DisplaySettings>}
 */
const DEFAULT_DISPLAY_SETTINGS = Object.freeze({
    textSize: "medium",
    contrast: "normal"
});



/**
 * Mutable current settings.
 * 
 * @type {DisplaySettings}
 */
const displaySettings = {
    ...DEFAULT_DISPLAY_SETTINGS
};

const pageRoot = document.documentElement;
const DISPLAY_STORAGE_KEY = "portfolio-display-settings";

// Controls are selected after the document has been parsed.
let textSizeButtons = [];
let contrastToggle = null;
let displayPanel = null;
let displayLauncher = null;
let displayClose = null;


/**
 * Applies the new settings and removes the previous settings.
 * @returns {void}
 */
function applySettings(){
    TEXT_SIZE_OPTIONS.forEach((size) => {
        pageRoot.classList.remove(`text-size-${size}`);
    });

    CONTRAST_OPTIONS.forEach((contrast) => {
        pageRoot.classList.remove(`contrast-${contrast}`);
    });

    pageRoot.classList.add(
        `text-size-${displaySettings.textSize}`,
        `contrast-${displaySettings.contrast}`
    );

    textSizeButtons.forEach((button) => {
        const isSelected = button.dataset.textsize === displaySettings.textSize;
        button.setAttribute("aria-pressed", String(isSelected));
    });

    if (contrastToggle !== null) {
        contrastToggle.setAttribute(
            "aria-pressed",
            String(displaySettings.contrast === "high")
        );
    }

}

/**
 * Updates the selected text size and applies the current settings.
 * Ignores values outside the accepted text-size options.
 *
 * @param {Event} event The button activation event.
 * @returns {void}
 */
function handleTextSizeChange(event) {
    const selectedSize = event.currentTarget.dataset.textsize;
    pageRoot.classList.add("display-transitions-enabled");
    if (!TEXT_SIZE_OPTIONS.includes(selectedSize)) {
        return;
    }

    displaySettings.textSize = selectedSize;
    applySettings();
    saveDisplaySettings();
}


/**
 * Switches between normal and high contrast and applies the settings.
 *
 * @returns {void}
 */
function handleContrastToggle() {
    pageRoot.classList.add("display-transitions-enabled");
    displaySettings.contrast =
        displaySettings.contrast === "normal" ? "high" : "normal";

    applySettings();
    saveDisplaySettings();
}

/**
 * Opens or closes the display panel and places keyboard focus.
 *
 * @param {boolean} isOpen Whether the panel should be visible.
 * @returns {void}
 */
function setDisplayPanelOpen(isOpen) {
    displayPanel.hidden = !isOpen;
    displayLauncher.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
        const selectedButton = Array.from(textSizeButtons).find(
            (button) => button.getAttribute("aria-pressed") === "true"
        );

        (selectedButton ?? displayClose).focus();
    } else {
        displayLauncher.focus();
    }
}

/**
 * Selects controls, connects events, and synchronizes their pressed states.
 * Runs after the document has been parsed.
 *
 * @returns {void}
 */
function initializeDisplayControls() {
    textSizeButtons = document.querySelectorAll(
        "#display-settings .text-size-button"
    );

    contrastToggle = document.getElementById("contrast-toggle");
    displayPanel = document.getElementById("display-settings");
    displayLauncher = document.getElementById("display-launcher");
    displayClose = document.getElementById("display-close");

    textSizeButtons.forEach((button) => {
        button.addEventListener("click", handleTextSizeChange);
    });

    contrastToggle.addEventListener("click", handleContrastToggle);

    displayLauncher.addEventListener("click", () => {
        setDisplayPanelOpen(displayPanel.hidden);
    });

    displayClose.addEventListener("click", () => {
        setDisplayPanelOpen(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !displayPanel.hidden) {
            event.preventDefault();
            setDisplayPanelOpen(false);
        }
    });

    applySettings();
}

/**
 * saves current display setting as a JSON string in local storage
 * @returns {boolean} succes state of the save
 */
function saveDisplaySettings() {
    try {
        localStorage.setItem(
            DISPLAY_STORAGE_KEY,
            JSON.stringify(displaySettings)
        );
        return true;
    } catch {
        return false;
    }
}

/**
 * Restores validated preferences from browser storage.
 * Uses defaults for missing or invalid values and storage failures.
 * Does not modify the stored entry.
 *
 * @returns {void}
 */
function restoreDisplaySettings() {
    displaySettings.textSize = DEFAULT_DISPLAY_SETTINGS.textSize;
    displaySettings.contrast = DEFAULT_DISPLAY_SETTINGS.contrast;

    try {
        const storedText = localStorage.getItem(DISPLAY_STORAGE_KEY);

        if (storedText === null) {
            return;
        }

        const savedSettings = JSON.parse(storedText);

        if (
            savedSettings === null ||
            typeof savedSettings !== "object" ||
            Array.isArray(savedSettings)
        ) {
            return;
        }

        if (TEXT_SIZE_OPTIONS.includes(savedSettings.textSize)) {
            displaySettings.textSize = savedSettings.textSize;
        }

        if (CONTRAST_OPTIONS.includes(savedSettings.contrast)) {
            displaySettings.contrast = savedSettings.contrast;
        }
    } catch {
        // Defaults remain active if storage or JSON parsing fails.
    }
}

// Apply saved classes before the page content is parsed.
restoreDisplaySettings();
applySettings();

// Connect controls once their HTML exists.
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeDisplayControls,
        { once: true }
    );
} else {
    initializeDisplayControls();
}