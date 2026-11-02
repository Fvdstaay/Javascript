# JavaScript Portfolio Lab 2

Portfolio project for course DA558A at Kristianstad University.
Target grade: **Grade 5**, including the Grade 3 and Grade 4 requirements.

## Open the project

1. Download or clone this repository.
2. Open `code/home.html` in a standalone web browser.

No installation, dependencies, or build step is required. Keep the local
images and scripts alongside the HTML. Browser storage is associated with
the browsing context; preferences saved in one browser may not appear in another.

## Implemented features

- Accessible feedback form with field validation, associated written errors,
  a live comments counter, personalized success feedback, and complete reset.
- Ten skill cards generated from JavaScript data across three categories,
  category filters, proficiency and experience sorting in both directions,
  alphabetical and original ordering, and a result counter.
- Floating display panel with Small, Medium, and Large text sizes
  (14px, 16px, and 20px) and a switch-style High contrast control.
- Display preferences saved in localStorage, validated on reload, and applied
  early before page content is parsed.
- Keyboard-operable controls, responsive layouts, and reduced-motion support.

## Data handling

Feedback is validated in the browser. Successful submission shows a message
and clears the form; feedback is not saved, emailed, or sent to a server.
The success message disappears after approximately four seconds.

Comments require at least **15 non-whitespace Unicode code points**. Spaces,
tabs, and line breaks do not increase the counter; the count continues beyond 15.

Only display preferences are stored under `portfolio-display-settings` in
localStorage. Missing or invalid settings fall back to Medium text and Normal
contrast. Storage failures are caught so display controls remain usable.

## Project files

| File | Purpose |
|---|---|
| `code/home.html` | Portfolio structure and controls |
| `code/styles.css` | Responsive layout, themes, and interaction styles |
| `code/feedback.js` | Form validation, counter, submission, reset, and timers |
| `code/skills.js` | Skill data, rendering, filtering, and sorting |
| `code/display-settings.js` | Display state, floating panel, and persistence |
| `report/Lab_2_Report.md` | Implementation explanations and test evidence |
| `report/screenshots/` | Screenshots referenced by the report |

## Verification

All 24 category/sort combinations passed an automated code-level check using
a simulated DOM. Browser checks reported by the author passed for the six
display combinations, keyboard controls, reduced motion, reload persistence,
invalid saved values, malformed JSON, and cross-feature regression at desktop
and narrow widths. These do not constitute a screen-reader audit or automated
real-browser testing. Unavailable-storage behavior is handled in code but has
not been separately browser-tested. Details are recorded in the report.

## Development checklist

Completed items reflect the implementation and recorded checks. Submission,
report finalization, and seminar tasks remain open until completed.

### Project foundation and code quality

- [x] Keep the README updated with the target grade, implemented features, and opening instructions.
- [x] Use vanilla JavaScript in external files, loaded with `defer` or at a safe point.
- [x] Use `const` by default, `let` when reassignment is necessary, and no `var`.
- [x] Use meaningful names, focused functions, and comments explaining important decisions.
- [x] Keep all required assets available and internal links working.

### Grade 3: Accessible feedback form

#### Structure and validation

- [x] Place the form in a clearly labelled section or separate feedback page.
- [x] Full Name: required, at least 2 characters; allow international letters, spaces, apostrophes, and hyphens.
- [x] Email: required, with a plausible address containing `@` and a domain.
- [x] Topic of Interest: required select with a placeholder and at least 3 meaningful choices.
- [x] Comments: required textarea with a minimum of 15 non-whitespace characters.
- [x] Website: optional URL field using browser URL validation when filled.
- [x] Connect a visible label to every control.
- [x] Add Submit and Clear buttons with appropriate button types.
- [x] Place error messages beside or below their fields and associate them with the inputs.
- [x] Provide an accessible status area for success messages.

#### Appearance and behavior

- [x] Show neutral borders before interaction and a strong visible focus state.
- [x] Show invalid fields with red borders and written error messages.
- [x] Show green borders only after fields have passed validation.
- [x] Clear field errors when values become valid.
- [x] Use restrained transitions and a responsive form layout.
- [x] Cache required form element references once in `const` variables.
- [x] Use focused validation, error-display, and reset functions.
- [x] Update the comments counter on every input event.
- [ ] Make the visible Comments guidance explicitly state the 15 non-whitespace character minimum.
- [x] Use red for a count below the minimum and green once it is met.
- [x] Prevent page reload on submission using `event.preventDefault()`.
- [x] Run every validator and stop submission when any field is invalid.
- [x] On success, show “Thanks for your feedback, [Full Name]!”.
- [x] After success, reset values, validation classes, errors, and the counter.
- [x] Remove the success message automatically after 4 seconds.
- [x] Make Clear restore the complete initial state, including messages and pending timers.
- [x] Keep form data in the browser; do not send email or submit to a server.

### Grade 4: Data-driven skills showcase

#### Data and rendering

- [x] Create an array of at least 8 skills across at least 3 categories.
- [x] Give each skill a unique numeric `id`.
- [x] Include `name`, `category`, and `description` strings.
- [x] Include integer `proficiency` from 1 to 5.
- [x] Include numeric `yearsExperience` of zero or more.
- [x] Write a description of one or two sentences for each skill.
- [x] Call one rendering function on page load to create a `.skill-card` for each skill.
- [x] Display each skill's name, category badge, proficiency indicator, experience, and description.
- [x] Generate cards from the array rather than hardcoding completed cards in HTML.

#### Filtering and sorting

- [x] Add an All Skills button and one button per category using `data-category`.
- [x] Update visible cards when a category is selected.
- [x] Show the active filter visually and through `aria-pressed`.
- [x] Use native buttons with visible keyboard focus.
- [x] Add proficiency sorting from highest to lowest.
- [x] Add experience sorting from highest to lowest.
- [x] Add alphabetical name sorting from A to Z.
- [x] Combine filtering and sorting: filter first, sort the resulting copy, then render.
- [x] Preserve the original data array.
- [x] Update a “Showing X of Y skills” counter when filtering changes.
- [x] Keep transitions restrained and respect reduced-motion preferences when animating.

### Grade 5: Accessibility display panel

#### Controls and display settings

- [x] Group display controls under a clear heading or legend.
- [x] Add Small, Medium (default), and Large text-size buttons using `data-textsize`.
- [x] Add a Normal/High Contrast toggle with visible state and `aria-pressed`.
- [x] Expose the active text-size choice accessibly.
- [x] Make every control reachable with Tab and operable with Enter or Space.
- [x] Use one `applySettings()` function to remove old setting classes, apply new ones, and update control states.
- [x] Define clear base text sizes for Small, Medium, and Large.
- [x] Keep navigation, forms, cards, and layouts usable at every text size.
- [x] Provide strong foreground/background contrast in High Contrast mode.
- [x] Keep borders, links, focus rings, errors, and success messages distinguishable.
- [x] Use transitions of about 0.3 seconds.
- [x] Disable nonessential motion when reduced motion is requested.

#### Persistence

- [x] Use `localStorage` for display preference persistence.
- [x] Save both text size and contrast whenever either changes.
- [x] Restore both settings after a page reload.
- [x] Use medium text and normal contrast as defaults.
- [x] Apply saved settings as early as practical to reduce incorrect-style flashing.

### Testing

- [x] Test the form's normal, invalid, valid, success, and Clear states.
- [x] Test the live counter and automatic success-message removal.
- [x] Test every category filter with every sort choice.
- [x] Test Small text with Normal contrast.
- [x] Test Small text with High Contrast.
- [x] Test Medium text with Normal contrast.
- [x] Test Medium text with High Contrast.
- [x] Test Large text with Normal contrast.
- [x] Test Large text with High Contrast.
- [x] Test all features at mobile and desktop widths.
- [x] Test keyboard access and visible focus throughout the interface.
- [x] Confirm saved display settings return after reload.
- [x] Resolve browser-console errors and missing assets.

### Git history and submission

- [x] Build a genuine development history across multiple work sessions.
- [x] Reach the Grade 3 checkpoint of at least 10 meaningful commits.
- [x] Add at least 15 meaningful commits for Grade 4, reaching at least 25 total.
- [ ] Add at least 20 meaningful commits for Grade 5, reaching at least 45 total.
- [x] Use descriptive commit messages and preserve the complete history.
- [ ] Verify the submitted repository link works.

### Report

- [ ] Include name, student ID, target grade, repository link, and implemented features.
- [x] Include captioned form screenshots showing normal, error, and valid/success states.
- [x] Include a screenshot showing a skill filter and sort applied together, with the result counter.
- [ ] Include screenshots comparing the default view with large text and high contrast.
- [x] Explain the main functions and how events lead to visible DOM updates.
- [x] Explain form validation and one problem solved.
- [x] Explain the skill data, rendering, and one state-management problem.
- [x] Explain `applySettings()`, the persistence method, and one accessibility test.
- [x] Describe at least one real problem, attempted solutions, and the solution that worked.
- [ ] Reflect on the interaction I am most confident explaining and why.
- [ ] Reflect on how Git history shows changes in my solution.
- [ ] Reflect on what I would improve or test in another session.
- [ ] Export the report as Word or PDF.

### Seminar preparation

- [ ] Prepare the website, JavaScript files, console, and Git history.
- [ ] Demonstrate invalid submission, successful submission, and the live counter.
- [ ] Demonstrate combined skill filtering and sorting.
- [ ] Demonstrate changing display settings and restoring them after reload.
- [ ] Trace one interaction from its event through the logic to the DOM update.
- [ ] Connect one meaningful commit to a decision or fix.
- [ ] Be able to explain validation, data rendering, filtering, sorting, persistence, and accessibility.
