/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars, import/no-unresolved
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
export default Pricing;
