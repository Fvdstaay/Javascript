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

/**
 * Validates the trimmed name and updates its feedback.
 * Allows Unicode letters and combining marks, spaces,
 * apostrophes, and hyphens.
 *
 * @returns {boolean} Whether the name meets the requirements.
 */
function validateFullName() {
    const name = fullNameInput.value.trim();
    const allowedCharacters = /^[\p{L}\p{M} '\u2019-]+$/u;
    const containsLetter = /\p{L}/u;

    if (Array.from(name).length < 2) {
        showFieldError(
            fullNameInput,
            fullNameError,
            "Please enter at least 2 characters."
        );
        return false;
    }

    if (!allowedCharacters.test(name) || !containsLetter.test(name)) {
        showFieldError(
            fullNameInput,
            fullNameError,
            "Use letters, spaces, apostrophes, or hyphens."
        );
        return false;
    }

    showFieldValid(fullNameInput, fullNameError);
    return true;
}

/**
 * Checks for a required, plausible email address.
 * Does not verify that the address exists.
 *
 * @returns {boolean} Whether the email passes validation.
 */
function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        showFieldError(
            emailInput,
            emailError,
            "Please enter your email address."
        );
        return false;
    }

    if (emailInput.validity.typeMismatch) {
        showFieldError(
            emailInput,
            emailError,
            "Please enter an email address such as name@example.com."
        );
        return false;
    }

    showFieldValid(emailInput, emailError);
    return true;
}

/**
 * Checks that a topic option has been selected.
 *
 * @returns {boolean} Whether a topic is selected.
 */
function validateTopic() {
    if (topicSelect.value === "") {
        showFieldError(
            topicSelect,
            topicError,
            "Please choose a topic."
        );
        return false;
    }

    showFieldValid(topicSelect, topicError);
    return true;
}

/**
 * Checks a supplied website using browser URL validation.
 * An empty optional field is accepted and kept neutral.
 *
 * @returns {boolean} Whether the website is empty or valid.
 */
function validateWebsite() {
    const website = websiteInput.value.trim();

    if (website === "") {
        resetFieldState(websiteInput, websiteError);
        return true;
    }

    if (websiteInput.validity.typeMismatch) {
        showFieldError(
            websiteInput,
            websiteError,
            "Please enter a complete URL such as https://example.com."
        );
        return false;
    }

    showFieldValid(websiteInput, websiteError);
    return true;
}


// Check text fields when the user leaves them.
fullNameInput.addEventListener("blur", validateFullName);
emailInput.addEventListener("blur", validateEmail);
websiteInput.addEventListener("blur", validateWebsite);

// Recheck edited fields after their first validation.
fullNameInput.addEventListener("input", () => {
    if (
        fullNameInput.classList.contains("is-invalid") ||
        fullNameInput.classList.contains("is-valid")
    ) {
        validateFullName();
    }
});

emailInput.addEventListener("input", () => {
    if (
        emailInput.classList.contains("is-invalid") ||
        emailInput.classList.contains("is-valid")
    ) {
        validateEmail();
    }
});

websiteInput.addEventListener("input", () => {
    if (
        websiteInput.classList.contains("is-invalid") ||
        websiteInput.classList.contains("is-valid")
    ) {
        validateWebsite();
    }
});

topicSelect.addEventListener("change", validateTopic);
topicSelect.addEventListener("blur", validateTopic);