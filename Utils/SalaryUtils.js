'use strict';

const {
    MONTHS,
    STANDARD_DEDUCTION,
    PF,
    PT,
    TOTAL_MONTHLY_HOURS,
    CESS,
    TAX_SLABS,
    DESIGNATIONS
} = require('../Configurations/Constants.js');


// ===================================
// Calculate Hourly Salary
// ===================================

function getHourlySalary(annualSalary) {

    let taxableIncome = annualSalary - STANDARD_DEDUCTION;

    if (taxableIncome < 0) {
        taxableIncome = 0;
    }

    let totalTax = 0;
    let remainingIncome = taxableIncome;

    for (let slab of TAX_SLABS) {

        if (remainingIncome <= 0) {
            break;
        }

        let currentIncome = Math.min(remainingIncome, slab.limit);

        totalTax += currentIncome * slab.tax;

        remainingIncome -= currentIncome;
    }

    totalTax = totalTax + (totalTax * CESS);

    let monthlySalary = annualSalary / MONTHS;

    let monthlyTax = totalTax / MONTHS;

    let monthlyTakeHome = monthlySalary - monthlyTax - PF - PT;

    return monthlyTakeHome / TOTAL_MONTHLY_HOURS;
}


// ===================================
// Find Employee Designation
// ===================================

function getDesignation(track, experience) {

    for (let level of DESIGNATIONS) {

        if (experience <= level.maxExperience) {
            return level[track];
        }

    }

}


// ===================================
// Salary Filter
// ===================================

function filterSalary(employees, minSalary, maxSalary) {

    return employees.filter(function(employee){

        return employee.salary >= minSalary &&
               employee.salary <= maxSalary;

    });

}


// ===================================
// Experience Filter
// ===================================

function filterExperience(employees, minExperience, maxExperience){

    return employees.filter(function(employee){

        return employee.experience >= minExperience &&
               employee.experience <= maxExperience;

    });

}


// ===================================
// Project Estimation
// ===================================

function getProjectEstimate(employees, options){

    let freeEmployees = employees.filter(function(employee){

        return employee.projectAllocated === false;

    });


    if(options.minSalary != undefined &&
       options.maxSalary != undefined){

        freeEmployees = filterSalary(
            freeEmployees,
            options.minSalary,
            options.maxSalary
        );

    }


    if(options.minExperience != undefined &&
       options.maxExperience != undefined){

        freeEmployees = filterExperience(
            freeEmployees,
            options.minExperience,
            options.maxExperience
        );

    }


    let totalHourlyRate = 0;

    for(let employee of freeEmployees){

        totalHourlyRate += getHourlySalary(employee.salary);

    }

    let totalProjectCost =
        totalHourlyRate *
        TOTAL_MONTHLY_HOURS *
        options.projectTimelineInMonths;


    return {

        employees: freeEmployees,
        totalHourlyRate,
        totalProjectCost

    };

}

module.exports = {

    getHourlySalary,
    getDesignation,
    getProjectEstimate

};