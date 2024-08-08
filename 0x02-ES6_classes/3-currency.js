export default class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'Code');
    this._name = this._validateString(name, 'Name');
  }

  // Code getter and setter
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this._validateString(newCode, 'Code');
  }

  // Name getter and setter
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'Name');
  }

  // Method to display the full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation method
  // eslint-disable-next-line class-methods-use-this
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
}
