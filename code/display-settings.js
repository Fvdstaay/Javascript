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

/** initialises listeners for the textsize buttons */
textSizeButtons.forEach((button) => {
    button.addEventListener("click", handleTextSizeChange);
});

contrastToggle.addEventListener("click", handleContrastToggle);

applySettings();