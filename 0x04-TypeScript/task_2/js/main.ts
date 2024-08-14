// task_2/js/main.ts

// Interface for Director with three required methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Interface for Teacher with three required methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'; // Director can work from home
    }
    
    getCoffeeBreak(): string {
        return 'Getting a coffee break'; // Director can take a coffee break
    }
    
    workDirectorTasks(): string {
        return 'Getting to director tasks'; // Director's tasks
    }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'; // Teacher cannot work from home
    }
    
    getCoffeeBreak(): string {
        return 'Cannot have a break'; // Teacher cannot have a break
    }
    
    workTeacherTasks(): string {
        return 'Getting to work'; // Teacher's tasks
    }
}

// Function to create an employee (either Director or Teacher)
// Depending on salary, it returns an instance of Director or Teacher
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher(); // Return a Teacher if salary is less than 500
    } else {
        return new Director(); // Otherwise, return a Director
    }
}

// Type predicate function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on the employee type
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks()); // Call Director's task method if employee is a Director
    } else {
        console.log(employee.workTeacherTasks()); // Otherwise, call Teacher's task method
    }
}

// String literal type for allowed subject values
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math'; // Return string for Math class
    } else {
        return 'Teaching History'; // Return string for History class
    }
}

// Example usage of the createEmployee, executeWork, and teachClass functions

console.log(createEmployee(200)); // Creates a Teacher
console.log(createEmployee(1000)); // Creates a Director
console.log(createEmployee('$500')); // Creates a Director

executeWork(createEmployee(200)); // Executes work for a Teacher
executeWork(createEmployee(1000)); // Executes work for a Director

console.log(teachClass('Math')); // Outputs: Teaching Math
console.log(teachClass('History')); // Outputs: Teaching History
