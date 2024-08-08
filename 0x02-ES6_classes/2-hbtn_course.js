/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // Name getter and setter
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateName(newName);
  }

  // Length getter and setter
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateLength(newLength);
  }

  // Students getter and setter
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateStudents(newStudents);
  }

  // Validation methods
  // eslint-disable-next-line class-methods-use-this
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
