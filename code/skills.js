"use strict";

/**
 * A skill displayed in the portfolio.
 *
 * @typedef {Object} Skill
 * @property {number} id Unique skill identifier.
 * @property {string} name Display name.
 * @property {string} category Category used for filtering.
 * @property {number} proficiency Suggested self-assessment from 1 to 5.
 * @property {number|null} yearsExperience Experience in years, or null until confirmed.
 * @property {string} description How the skill is used.
 */

/**
 * Source data for the skills showcase.
 * Filtering and sorting should create derived arrays.
 * Ratings are provisional self-assessments; Python, C++, and Java reflect
 * the intermediate levels stated in the existing portfolio.
 *
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
