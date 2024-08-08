/* eslint-disable no-underscore-dangle */
class Airport {
  constructor(name, code) {
    this._name = name; // Store name
    this._code = code; // Store code
  }

  // Override the toString method
  toString() {
    return `[object ${this._code}]`;
  }
}
export default Airport;
