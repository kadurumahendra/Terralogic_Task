'use strict';

// =====================
// Salary Constants
// =====================

// Number of months in one year
const MONTHS = 12;

// Standard deduction under new tax regime
const STANDARD_DEDUCTION = 50000;

// Monthly deductions
const PF = 1800;
const PT = 200;

// Working hours
const WORKING_DAYS = 22;
const HOURS_PER_DAY = 8;
const TOTAL_MONTHLY_HOURS = WORKING_DAYS * HOURS_PER_DAY;

// Education cess
const CESS = 0.04;

// =====================
// Tax Slabs
// =====================

const TAX_SLABS = [
    { limit: 300000, tax: 0 },
    { limit: 300000, tax: 0.05 },
    { limit: 300000, tax: 0.10 },
    { limit: 300000, tax: 0.15 },
    { limit: 300000, tax: 0.20 },
    { limit: Infinity, tax: 0.30 }
];

// =====================
// Employee Levels
// =====================

const DESIGNATIONS = [
    {
        maxExperience: 2,
        engineering: "Software Engineer 1",
        qa: "QA 1"
    },
    {
        maxExperience: 5,
        engineering: "Software Engineer 2",
        qa: "QA 2"
    },
    {
        maxExperience: 9,
        engineering: "Lead Engineer",
        qa: "Lead Engineer"
    },
    {
        maxExperience: Infinity,
        engineering: "Project Manager",
        qa: "Project Manager"
    }
];

// Project duration
const PROJECT_MONTHS = 2.9;

// Salary Filter
const MIN_SALARY = 1500000;
const MAX_SALARY = 2000000;

// Experience Filter
const MIN_EXPERIENCE = 2;
const MAX_EXPERIENCE = 5;

module.exports = {
    MONTHS,
    STANDARD_DEDUCTION,
    PF,
    PT,
    TOTAL_MONTHLY_HOURS,
    CESS,
    TAX_SLABS,
    DESIGNATIONS,
    PROJECT_MONTHS,
    MIN_SALARY,
    MAX_SALARY,
    MIN_EXPERIENCE,
    MAX_EXPERIENCE
};