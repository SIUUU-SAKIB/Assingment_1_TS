export
// problem-1
const multiplyValue = (num: number, multiplyer?: number) => {
    if (multiplyer) console.log(num * multiplyer)
    else console.log(num)
}

// problem-2
type IInput = string | number | boolean
const processInput = (value:IInput) => {
    if(typeof value ===  "string") {
      console.log(value.trim().toLowerCase())  
    }
    if(typeof value === "number") {
        console.log(value * 10)
    }
    value === true? console.log("Active") : console.log("Inactive") 
}

// problem-3
type Coordinate = readonly [latitude:number, longitude:number, locationName:string];
const formatCoordinate = (coordinate:Coordinate):string => {
const [latitude, longitude, locationName]= coordinate;
return `Location ${locationName} ${latitude} ${longitude}`
}

// problem-4
const concatenateArrays = <T>(...arr: T[][]): T[] => {
  return arr.reduce<T[]>((result, array) => result.concat(array), []);
}
//problem-5
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}


//probem-6
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// problem-7
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");

// problem -8
const validateAgeAsync = async(age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access deied: Must be 18 or older");
  }

  return new Promise<string>((res) => {
    setTimeout(() => console.log("access granted"), 1000);
  });
}
await validateAgeAsync(2);