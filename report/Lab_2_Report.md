# Lab 2 Interactive Portfolio Report

Floris van der Staaij| DA558A | Target Grade 5

Repository: https://github.com/Fvdstaay/Javascript

Progress recorded on 28 October 2026

## Project information

I am extending my Lab 1 portfolio with vanilla JavaScript, targeting Grade 5. The current implementation contains the feedback form structure, supporting CSS, shared JavaScript helpers, and validation for all five fields, including a live comments counter. Submission handling is not yet connected.

## Feedback form implementation

The feedback form is integrated into the Contact section of code/home.html. It contains required Full Name, Email, Topic of Interest, and Comments fields, plus an optional Website field. HTML attributes provide required-field constraints, minimum lengths, and email or URL types. Each control has a visible label and references its adjacent error paragraph through aria-describedby. The comments field also references its character counter.

The stylesheet provides neutral controls, visible focus, red invalid states, green valid states, and a red required-field marker. The form uses flexible layouts and full-width controls. These styles prepare the interface for validation; their presence alone does not demonstrate that validation works.

## Normal form appearance

![Feedback form before interaction with all five fields and both buttons](screenshots/form-normal.png)

*Figure 1: The feedback form before interaction. Required fields have red asterisks, controls have neutral borders, and the counter shows zero characters with a 15-character minimum. The Website field is optional. This image documents the initial appearance, not validation behavior.*

## Shared JavaScript helpers

code/feedback.js stores references to the form controls and feedback elements once using const. showFieldError() removes the valid class, adds the invalid class, sets aria-invalid to true, and writes a message using textContent. clearFieldError() removes the error class and aria-invalid attribute and empties the error message. showFieldValid() clears an error and adds the valid class. resetFieldState() clears the error and removes the valid class, returning the field to a neutral appearance without changing its value.

The helpers separate presentation updates from validation rules. They update field styling, accessible invalid states, and error messages without changing field values. The field validators call these helpers in response to blur, input, and change events.

## Field validation

Full Name, Email, Topic of Interest, and the optional Website field have dedicated validators. Text fields are checked when they lose focus and rechecked during editing after their first validation. Topic selection is checked on change and blur. Each validator returns a boolean and uses the shared helpers to update error text, styling, and accessible invalid state.

Name validation checks the trimmed value for at least two Unicode code points and allows international letters, combining marks, spaces, apostrophes, and hyphens while requiring at least one letter. Email and Website validation use the browser's typeMismatch property. Topic validation rejects the empty placeholder value. An empty Website field is accepted and returned to a neutral appearance because it is optional.

## Comments validation and counter

Comments are validated on input and blur. Every input event also updates the written character count and its red or green minimum-length feedback. Validation requires at least 15 characters and rejects whitespace-only input. The counter and validator share one minimum-length constant.

![Feedback form showing field errors and a live comments counter](screenshots/form-field-errors.png)

*Figure 2: Field-validation feedback during editing. The name floris11 contains digits, the supplied email and Website values produce format errors, and the four-character comment is below the 15-character minimum. Coffee and pastries is selected and shown as valid. Errors include written explanations. This captures field feedback, rather than validation triggered by form submission.*

## Git development

The development history records separate changes for the foundation (3b1405a), feedback form structure (8fec860), and form styling (a097ae7). This provides traceable steps from the static portfolio toward interactive feedback.
