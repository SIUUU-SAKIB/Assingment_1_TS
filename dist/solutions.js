export 
// problem-1
const multiplyValue = (num, multiplyer) => {
    if (multiplyer)
        console.log(num * multiplyer);
    else
        console.log(num);
};
const processInput = (value) => {
    if (typeof value === "string") {
        console.log(value.trim().toLowerCase());
    }
    if (typeof value === "number") {
        console.log(value * 10);
    }
    value === true ? console.log("Active") : console.log("Inactive");
};
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location ${locationName} ${latitude} ${longitude}`;
};
// problem-4
const concatenateArrays = (...arr) => {
    return arr.reduce((result, array) => result.concat(array), []);
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
//probem-6
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
// problem-7
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
// problem -8
const validateAgeAsync = async (age) => {
    if (age < 18) {
        throw new Error("Access deied: Must be 18 or older");
    }
    return new Promise((res) => {
        setTimeout(() => console.log("access granted"), 1000);
    });
};
await validateAgeAsync(2);
