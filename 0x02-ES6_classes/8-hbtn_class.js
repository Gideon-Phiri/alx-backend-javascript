/* eslint-disable no-underscore-dangle */
class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Store size
    this._location = location; // Store location
  }

  // Override valueOf to cast to Number
  valueOf() {
    return this._size;
  }

  // Override toString to cast to String
  toString() {
    return this._location;
  }
}
export default HolbertonClass;
