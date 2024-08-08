import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Store range
  }

  // Override the cloneCar method
  cloneCar() {
    // Return an instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
export default EVCar;
