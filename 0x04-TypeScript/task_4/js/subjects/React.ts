namespace Subjects {
  // Extend the Teacher interface to add an optional attribute for React teaching experience
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Define a class named React that extends the Subject class
  export class React extends Subject {
    // Method to return the requirements for React
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Method to return the available teacher for React, or a message if none is available
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
