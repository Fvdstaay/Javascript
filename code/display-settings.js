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