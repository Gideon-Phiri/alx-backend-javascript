namespace Subjects {
  // Define a class named Subject within the Subjects namespace
  export class Subject {
    teacher: Teacher; // The teacher attribute implements the Teacher interface

    // Setter method to assign a teacher to the subject
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
