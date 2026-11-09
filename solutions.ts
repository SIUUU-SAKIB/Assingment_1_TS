
const multiplyValue = (num: number, multiplyer?: number) => {
    if (multiplyer) return num * multiplyer
    else  return num
}


type IInput = string | number | boolean
const processInput = (value:IInput) => {
    if(typeof value ===  "string") {
      return value.trim().toLowerCase()  
    }
    if(typeof value === "number") {
        return (value * 10)
    }
   if(value === true) return "Active"
    else return "Inactive"
}


type Coordinate = readonly [latitude:number, longitude:number, locationName:string];
const formatCoordinate = (coordinate:Coordinate):string => {
const [latitude, longitude, locationName]= coordinate;
return `location ${locationName} ${latitude} ${longitude}`
}


const concatenateArrays = <T>(...arr: T[][]): T[] => {
  return arr.reduce<T[]>((result, aray) => result.concat(aray), []);
}



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



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
}



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



const validateAgeAsync = async(age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access deied: Must be 18 or older");
  }

  return new Promise<string>((res) => {
    setTimeout(() => console.log("Access Granted"), 1000);
  });
}
