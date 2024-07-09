export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // This method returns the size when it is cast to a number
  valueOf() {
    return this._size;
  }

  // This method returns the location when it is cast to a string
  toString() {
    return this._location;
  }

  /**
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }
  */
}
