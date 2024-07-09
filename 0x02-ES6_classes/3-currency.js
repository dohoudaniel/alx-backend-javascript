export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('Code must be a string');
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._code = code;
    this._name = name;
  }

  // Getter and setter methods for the code attribute
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') throw TypeError('Name must be a string');
    this._code = value;
  }

  // Getter and setter methods for the code attribute
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw TypeError('Name must be a string');
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
