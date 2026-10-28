"use strict";

// Store references once so handlers can reuse them.
const feedbackForm = document.getElementById("feedback_form");

const fullNameInput = document.getElementById("full_name");
const emailInput = document.getElementById("email");
const topicSelect = document.getElementById("topic");
const commentsInput = document.getElementById("comments");
const websiteInput = document.getElementById("website");

const fullNameError = document.getElementById("full-name-error");
const emailError = document.getElementById("email-error");
const topicError = document.getElementById("topic-error");
const commentsError = document.getElementById("comments-error");
const websiteError = document.getElementById("website-error");

const commentsCounter = document.getElementById("comments-counter");
const formStatus = document.getElementById("form-status");

/**
 * Displays a field error and exposes its invalid state to assistive technology.
 * Does not change the field's value.
 *
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} input
 *     The form control that failed validation.
 * @param {HTMLElement} errorElement
 *     The error container associated with the control.
 * @param {string} message
 *     The explanation displayed to the user.
 * @returns {void}
 */
function showFieldError(input, errorElement, message) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");

    errorElement.textContent = message;
}


/**
 * Removes a field's error message and invalid state.
 * Preserves the field's value and any existing valid state.
 *
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} input
 *     The form control to update.
 * @param {HTMLElement} errorElement
 *     The control's associated error container.
 * @returns {void}
 */
function clearFieldError(input, errorElement) {
    input.classList.remove("is-invalid");
    input.removeAttribute("aria-invalid");

    errorElement.textContent = "";
}

/**
 * Clears a field's error and applies its valid appearance.
 * Call only after validation succeeds; this function does not validate values.
 *
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} input
 *     The control that passed validation.
 * @param {HTMLElement} errorElement
 *     The control's associated error container.
 * @returns {void}
 */
function showFieldValid(input, errorElement) {
    clearFieldError(input, errorElement);
    input.classList.add("is-valid");
}

/**
 * Restores a field's neutral appearance and clears its error.
 * Does not reset the field's value.
 *
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} input
 *     The form control to reset visually.
 * @param {HTMLElement} errorElement
 *     The control's associated error container.
 * @returns {void}
 */
function resetFieldState(input, errorElement) {
    clearFieldError(input, errorElement);
    input.classList.remove("is-valid");
}