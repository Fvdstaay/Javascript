# Lab 2 Interactive Portfolio Report

Floris van der Staaij| DA558A | Target Grade 5

Repository: https://github.com/Fvdstaay/Javascript

Progress recorded on 28 October 2026

## Project information

I am extending my Lab 1 portfolio with vanilla JavaScript, targeting Grade 5. The current implementation contains the feedback form structure, supporting CSS, and shared JavaScript helpers. Field validation and submission handling are not yet connected.

## Feedback form implementation

The feedback form is integrated into the Contact section of code/home.html. It contains required Full Name, Email, Topic of Interest, and Comments fields, plus an optional Website field. HTML attributes provide required-field constraints, minimum lengths, and email or URL types. Each control has a visible label and references its adjacent error paragraph through aria-describedby. The comments field also references its character counter.

The stylesheet provides neutral controls, visible focus, red invalid states, green valid states, and a red required-field marker. The form uses flexible layouts and full-width controls. These styles prepare the interface for validation; their presence alone does not demonstrate that validation works.

## Normal form appearance

![Feedback form before interaction with all five fields and both buttons](screenshots/form-normal.png)

*Figure 1: The feedback form before interaction. Required fields have red asterisks, controls have neutral borders, and the counter shows zero characters with a 15-character minimum. The Website field is optional. This image documents the initial appearance, not validation behavior.*

## Shared JavaScript helpers

code/feedback.js stores references to the form controls and feedback elements once using const. showFieldError() removes the valid class, adds the invalid class, sets aria-invalid to true, and writes a message using textContent. clearFieldError() removes the error class and aria-invalid attribute and empties the error message. showFieldValid() clears an error and adds the valid class. resetFieldState() clears the error and removes the valid class, returning the field to a neutral appearance without changing its value.

The helpers separate presentation updates from validation rules. They update field styling, accessible invalid states, and error messages without changing field values. They are not yet connected to form events.

## Git development

The development history records separate changes for the foundation (3b1405a), feedback form structure (8fec860), and form styling (a097ae7). This provides traceable steps from the static portfolio toward interactive feedback.
