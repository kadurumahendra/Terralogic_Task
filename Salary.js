'use strict';

const {

    PROJECT_MONTHS,
    MIN_SALARY,
    MAX_SALARY,
    MIN_EXPERIENCE,
    MAX_EXPERIENCE

} = require('./Configurations/Constants.js');

const { employees } = require('./data/employee');

const { getProjectEstimate } = require('./utils/salaryUtils');


// ======================================
// Overall Project Cost
// ======================================

let project = getProjectEstimate(employees,{

    projectTimelineInMonths: PROJECT_MONTHS

});

console.log("========== PROJECT DETAILS ==========\n");

console.log("Available Employees :", project.employees.length);

console.log("Project Cost :", project.totalProjectCost.toFixed(2));


// ======================================
// Salary Filter
// ======================================

let salaryEmployees = getProjectEstimate(employees,{

    minSalary: MIN_SALARY,
    maxSalary: MAX_SALARY,
    projectTimelineInMonths: PROJECT_MONTHS

});

console.log("\nEmployees Between Salary Range");

salaryEmployees.employees.forEach(function(employee){

    console.log(employee.name);

});


// ======================================
// Experience Filter
// ======================================

let experienceEmployees = getProjectEstimate(employees,{

    minExperience: MIN_EXPERIENCE,
    maxExperience: MAX_EXPERIENCE,
    projectTimelineInMonths: PROJECT_MONTHS

});

console.log("\nEmployees Between Experience Range");

experienceEmployees.employees.forEach(function(employee){

    console.log(employee.name);

});

console.log(
    "\nEstimated Cost :",
    experienceEmployees.totalProjectCost.toFixed(2)
);