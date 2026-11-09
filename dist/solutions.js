"use strict";
const multiplyValue = (num, multiplyer) => {
    if (multiplyer)
        return num * multiplyer;
    else
        return num;
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return (value * 10);
    }
    if (value === true)
        return "Active";
    else
        return "Inactive";
};
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `location ${locationName} ${latitude} ${longitude}`;
};
const concatenateArrays = (...arr) => {
    return arr.reduce((result, aray) => result.concat(aray), []);
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
const validateAgeAsync = async (age) => {
    if (age < 18) {
        throw new Error("Access deied: Must be 18 or older");
    }
    return new Promise((res) => {
        setTimeout(() => console.log("Access Granted"), 1000);
    });
};
