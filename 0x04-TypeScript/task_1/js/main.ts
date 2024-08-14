// Interface representing a teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // Allows for additional properties to be added to the teacher object
  [key: string]: any;
}

// Interface representing a director, which extends the Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface defining the signature of a function that prints a teacher's name
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Interface defining the methods a student class should implement
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Create a teacher object
const teacher: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher);

// Create a director object
const director: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director);

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the printTeacher function
console.log(printTeacher("John", "Doe"));

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create a student object
const student = new StudentClass("Jane", "Doe");
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework());
