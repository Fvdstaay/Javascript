"use strict"


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

// Store control references once.
const textSizeButtons = document.querySelectorAll(
    "#display-settings .text-size-button"
);

const contrastToggle = document.getElementById("contrast-toggle");
const pageRoot = document.documentElement;
const displayPanel = document.getElementById("display-settings");
const displayLauncher = document.getElementById("display-launcher");
const displayClose = document.getElementById("display-close");


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

    contrastToggle.setAttribute(
        "aria-pressed",
        String(displaySettings.contrast === "high")
    );

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

    if (!TEXT_SIZE_OPTIONS.includes(selectedSize)) {
        return;
    }

    displaySettings.textSize = selectedSize;
    applySettings();
}


/**
 * Switches between normal and high contrast and applies the settings.
 *
 * @returns {void}
 */
function handleContrastToggle() {
    displaySettings.contrast =
        displaySettings.contrast === "normal" ? "high" : "normal";

    applySettings();
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

/** initialises listeners for the textsize buttons */
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