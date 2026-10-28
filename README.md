# Javascript portfolioi Lab 2
The repository for my Javascript course at the Kristianstad University. DA558A


## Target 
I am working towards Grade 5. This gives me the following planned features

Grade 5 includes all Grade 3 and Grade 4 requirements.
Mark an item complete only after implementing and checking it.

### Project foundation and code quality

- [ ] Keep the README updated with the target grade, implemented features, and opening instructions.
- [ ] Use vanilla JavaScript in external files, loaded with `defer` or at a safe point.
- [ ] Use `const` by default, `let` when reassignment is necessary, and no `var`.
- [ ] Use meaningful names, focused functions, and comments explaining important decisions.
- [ ] Keep all required assets available and internal links working.

### Grade 3: Accessible feedback form

#### Structure and validation

- [x] Place the form in a clearly labelled section or separate feedback page.
- [x] Full Name: required, at least 2 characters; allow international letters, spaces, apostrophes, and hyphens.
- [X] Email: required, with a plausible address containing `@` and a domain.
- [X] Topic of Interest: required select with a placeholder and at least 3 meaningful choices.
- [X] Comments: required textarea with a minimum of 15 characters.
- [X] Website: optional URL field using browser URL validation when filled.
- [X] Connect a visible label to every control.
- [X] Add Submit and Clear buttons with appropriate button types.
- [X] Place error messages beside or below their fields and associate them with the inputs.
- [ ] Provide an accessible status area for success messages.

#### Appearance and behavior

- [ ] Show neutral borders before interaction and a strong visible focus state.
- [ ] Show invalid fields with red borders and written error messages.
- [ ] Show green borders only after fields have passed validation.
- [ ] Clear field errors when values become valid.
- [ ] Use restrained transitions and a responsive form layout.
- [ ] Cache required form element references once in `const` variables.
- [ ] Use focused validation, error-display, and reset functions.
- [ ] Update the comments counter on every input event.
- [ ] Show the character count and 15-character minimum in text.
- [ ] Use red for a count below the minimum and green once it is met.
- [ ] Prevent page reload on submission using `event.preventDefault()`.
- [ ] Run every validator and stop submission when any field is invalid.
- [ ] On success, show “Thanks for your feedback, [Full Name]!”.
- [ ] After success, reset values, validation classes, errors, and the counter.
- [ ] Remove the success message automatically after 4 seconds.
- [ ] Make Clear restore the complete initial state, including messages and pending timers.
- [ ] Keep form data in the browser; do not send email or submit to a server.

### Grade 4: Data-driven skills showcase

#### Data and rendering

- [ ] Create an array of at least 8 skills across at least 3 categories.
- [ ] Give each skill a unique numeric `id`.
- [ ] Include `name`, `category`, and `description` strings.
- [ ] Include integer `proficiency` from 1 to 5.
- [ ] Include numeric `yearsExperience` of zero or more.
- [ ] Write a description of one or two sentences for each skill.
- [ ] Call one rendering function on page load to create a `.skill-card` for each skill.
- [ ] Display each skill's name, category badge, proficiency indicator, experience, and description.
- [ ] Generate cards from the array rather than hardcoding completed cards in HTML.

#### Filtering and sorting

- [ ] Add an All Skills button and one button per category using `data-category`.
- [ ] Update visible cards when a category is selected.
- [ ] Show the active filter visually and through `aria-pressed`.
- [ ] Use native buttons with visible keyboard focus.
- [ ] Add proficiency sorting from highest to lowest.
- [ ] Add experience sorting from highest to lowest.
- [ ] Add alphabetical name sorting from A to Z.
- [ ] Combine filtering and sorting: filter first, sort the resulting copy, then render.
- [ ] Preserve the original data array.
- [ ] Update a “Showing X of Y skills” counter when filtering changes.
- [ ] Keep transitions restrained and respect reduced-motion preferences when animating.

### Grade 5: Accessibility display panel

#### Controls and display settings

- [ ] Group display controls under a clear heading or legend.
- [ ] Add Small, Medium (default), and Large text-size buttons using `data-textsize`.
- [ ] Add a Normal/High Contrast toggle with visible state and `aria-pressed`.
- [ ] Expose the active text-size choice accessibly.
- [ ] Make every control reachable with Tab and operable with Enter or Space.
- [ ] Use one `applySettings()` function to remove old setting classes, apply new ones, and update control states.
- [ ] Define clear base text sizes for Small, Medium, and Large.
- [ ] Keep navigation, forms, cards, and layouts usable at every text size.
- [ ] Provide strong foreground/background contrast in High Contrast mode.
- [ ] Keep borders, links, focus rings, errors, and success messages distinguishable.
- [ ] Use transitions of about 0.3 seconds.
- [ ] Disable nonessential motion when reduced motion is requested.

#### Persistence

- [ ] Implement one persistence method: `localStorage` or URL parameters.
- [ ] Save both text size and contrast whenever either changes.
- [ ] Restore both settings after a page reload.
- [ ] Use medium text and normal contrast as defaults.
- [ ] Apply saved settings as early as practical to reduce incorrect-style flashing.
- [ ] If using URL parameters, validate values and use defaults for missing or invalid values.
- [ ] If using URL parameters across multiple pages, preserve them in internal links where settings should continue.

### Testing

- [ ] Test the form's normal, invalid, valid, success, and Clear states.
- [ ] Test the live counter and automatic success-message removal.
- [ ] Test every category filter with every sort choice.
- [ ] Test Small text with Normal contrast.
- [ ] Test Small text with High Contrast.
- [ ] Test Medium text with Normal contrast.
- [ ] Test Medium text with High Contrast.
- [ ] Test Large text with Normal contrast.
- [ ] Test Large text with High Contrast.
- [ ] Test all features at mobile and desktop widths.
- [ ] Test keyboard access and visible focus throughout the interface.
- [ ] Confirm saved display settings return after reload.
- [ ] Resolve browser-console errors and missing assets.

### Git history and submission

- [ ] Build a genuine development history across multiple work sessions.
- [ ] Reach the Grade 3 checkpoint of at least 10 meaningful commits.
- [ ] Add at least 15 meaningful commits for Grade 4, reaching at least 25 total.
- [ ] Add at least 20 meaningful commits for Grade 5, reaching at least 45 total.
- [ ] Use descriptive commit messages and preserve the complete history.
- [ ] Verify the submitted repository link works.

### Report

- [ ] Include name, student ID, target grade, repository link, and implemented features.
- [ ] Include captioned form screenshots showing normal, error, and valid/success states.
- [ ] Include a screenshot showing a skill filter and sort applied together, with the result counter.
- [ ] Include screenshots comparing the default view with large text and high contrast.
- [ ] Explain the main functions and how events lead to visible DOM updates.
- [ ] Explain form validation and one problem solved.
- [ ] Explain the skill data, rendering, and one state-management problem.
- [ ] Explain `applySettings()`, the persistence method, and one accessibility test.
- [ ] Describe at least one real problem, attempted solutions, and the solution that worked.
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

## Open the project

1. Download or clone this repository.
2. Open `code/home.html` in a web browser.

No installation or build step is required.
