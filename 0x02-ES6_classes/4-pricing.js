// This line of code is not needed since it is called from 4-main.js
// import Currency from 3-currency

export default class Pricing {
  constructor(amount, currency) {
    // if (!Number.isInteger(amount)) throw TypeError('Amount must be a number');
    // if (typeof currency !== 'string') throw TypeError('Currency must be a string');
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter methods for the amount attribute
  get amount() {
    return this._amount;
  }

  set amount(value) {
    // if (!Number.isInteger(value)) throw TypeError('Amount must be a number');
    this._amount = value;
  }

  // Getter and setter methods for the currency attribute
  get currency() {
    return this._currency;
  }

  set currency(value) {
    // if (typeof value !== 'string') throw TypeError('Name must be a string');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    // if (!Number.isInteger(amount)) throw TypeError('Amount must be a number');
    // if (!Number.isInteger(conversionRate)) throw TypeError('Amount must be a number');
    return (amount * conversionRate);
  }
}
