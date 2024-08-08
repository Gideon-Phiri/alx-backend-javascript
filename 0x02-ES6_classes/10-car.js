/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
const cloneSymbol = Symbol('clone');

class Car {
    constructor(brand, motor, color) {
        // eslint-disable-next-line no-underscore-dangle
        this._brand = brand; // Store brand
        // eslint-disable-next-line no-underscore-dangle
        this._motor = motor; // Store motor
        // eslint-disable-next-line no-underscore-dangle
        this._color = color; // Store color
    }

    // Method to clone the car
    cloneCar() {
        // Create a new instance of the Car class
        // eslint-disable-next-line no-underscore-dangle
        return new this.constructor(this._brand, this._motor, this._color);
    }
}
export default Car;
