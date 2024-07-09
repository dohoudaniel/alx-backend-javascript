export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // This method returns a new object of the class
  cloneCar() {
    // The line of code below does not work because:
    // - it would always create an instance of the Car class, and
    // this can be very harmful in a situation where the class is extended
    // and in terms of subclassing too.
    // return new Car(this._brand, this._motor, this._color);
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
