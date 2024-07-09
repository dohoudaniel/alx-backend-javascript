export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (!Number.isInteger(length)) throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters and setters for the name property
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw TypeError('Name must be a string');
    this._name = value;
  }

  // Getters and setters for the length property
  get length() {
    return this._length;
  }

  set length(value) {
    if (!Number.isInteger(value)) throw TypeError('Length must be a number');
    this._length = value;
  }

  // Getters and setters for the students property
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) throw TypeError('Students must be an array');
    this._students = value;
  }
}
