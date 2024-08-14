namespace Subjects {
  // Extend the Teacher interface to add an optional attribute for Java teaching experience
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Define a class named Java that extends the Subject class
  export class Java extends Subject {
    // Method to return the requirements for Java
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Method to return the available teacher for Java, or a message if none is available
    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
