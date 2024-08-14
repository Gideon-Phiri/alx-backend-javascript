namespace Subjects {
  // Using declaration merging to add an optional attribute to the Teacher interface
  export interface Teacher {
    experienceTeachingC?: number; // Optional attribute for experience in teaching C++
  }

  // Define a class named Cpp that extends the Subject class
  export class Cpp extends Subject {
    // Method to return the requirements for C++
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Method to return the available teacher for C++, or a message if none is available
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
