"use strict";

/**
 * A skill displayed in the portfolio.
 *
 * @typedef {Object} Skill
 * @property {number} id Unique skill identifier.
 * @property {string} name Display name.
 * @property {string} category Category used for filtering.
 * @property {number} proficiency Suggested self-assessment from 1 to 5.
 * @property {number} yearsExperience Experience in years.
 * @property {string} description How the skill is used.
 */

/**
 * Source data for the skills showcase.
 * Contains self-assessed proficiency and experience values.
 * Filtering and sorting should create derived arrays.
 *
 * @type {Skill[]}
 */
const skills = [
    {
        id: 1,
        name: "HTML",
        category: "Web Development",
        proficiency: 2,
        yearsExperience: 0.2,
        description: "I structure portfolio pages using semantic sections, navigation, forms, labels, and accessible descriptions."
    },
    {
        id: 2,
        name: "CSS",
        category: "Web Development",
        proficiency: 2,
        yearsExperience: 0.2,
        description: "I style responsive layouts and interactive form states, including focus indicators and validation feedback."
    },
    {
        id: 3,
        name: "JavaScript",
        category: "Web Development",
        proficiency: 2,
        yearsExperience: 0.2,
        description: "I build browser interactions using event listeners, validation functions, DOM updates, counters, and timers."
    },
    {
        id: 4,
        name: "C#",
        category: "Programming",
        proficiency: 2,
        yearsExperience: 2,
        description: "I develop console exercises involving input validation, game loops, reusable methods, and program structure."
    },
    {
        id: 5,
        name: "Python",
        category: "Programming",
        proficiency: 4,
        yearsExperience: 5,
        description: "I use Python for programming and machine-learning applications."
    },
    {
        id: 6,
        name: "C++",
        category: "Programming",
        proficiency: 2,
        yearsExperience: 1,
        description: "I use C++ for algorithmic problem solving, including Kattis exercises."
    },
    {
        id: 7,
        name: "Java",
        category: "Programming",
        proficiency: 4,
        yearsExperience: 5,
        description: "I use Java for programming exercises and small applications."
    },
    {
        id: 8,
        name: "Git and GitHub",
        category: "Development Tools",
        proficiency: 3,
        yearsExperience: 4,
        description: "I track development through focused commits and maintain code, documentation, and evidence in a repository."
    },
    {
        id: 9,
        name: "Browser Developer Tools",
        category: "Development Tools",
        proficiency: 2,
        yearsExperience: 0.3,
        description: "I inspect HTML and CSS, test interface states, and investigate layout and validation problems."
    },
    {
        id: 10,
        name: "Technical Documentation",
        category: "Development Tools",
        proficiency: 4,
        yearsExperience: 5,
        description: "I document functions with JSDoc and maintain a Markdown report with implementation explanations and screenshots."
    }
];
const skillsList = document.getElementById("skills-list");

/**
 * Replaces displayed cards with complete information for each supplied skill.
 * Shows category, proficiency, experience, and description.
 * Does not modify the source array or its objects.
 *
 * @param {Skill[]} skillsToRender
 *     The skills to display, in their intended order.
 * @returns {void}
 */
function renderSkills(skillsToRender) {
    const fragment = document.createDocumentFragment();

    skillsToRender.forEach((skill) => {
        const card = document.createElement("article");
        card.classList.add("skill-card");
        card.dataset.skillId = String(skill.id);

        const heading = document.createElement("h3");
        heading.textContent = skill.name;

        const category = document.createElement("span");
        category.classList.add("skill-category");
        category.textContent = skill.category;

        const proficiencyDots = document.createElement("div");
        proficiencyDots.classList.add("skill-proficiency");
        proficiencyDots.setAttribute("role", "img");
        proficiencyDots.setAttribute(
            "aria-label",
            `${skill.name} proficiency: ${skill.proficiency} out of 5`
        );
        
        for (let level = 1; level <= 5; level++) {
            const dot = document.createElement("span");
            dot.classList.add("proficiency-dot");
            dot.setAttribute("aria-hidden", "true");
        
            if (level <= skill.proficiency) {
                dot.classList.add("is-filled");
            }
        
            proficiencyDots.append(dot);
        }

        const experience = document.createElement("p");
        experience.classList.add("skill-experience");

        const yearLabel =
            skill.yearsExperience === 1 ? "year" : "years";

        experience.textContent =
            `${skill.yearsExperience} ${yearLabel} of experience`;

        const description = document.createElement("p");
        description.classList.add("skill-description");
        description.textContent = skill.description;

        card.append(
            heading,
            category,
            proficiencyDots,
            experience,
            description
        );

        fragment.append(card);
    });

    skillsList.replaceChildren(fragment);
}

renderSkills(skills);