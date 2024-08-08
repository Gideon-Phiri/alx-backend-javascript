// eslint-disable-next-line import/no-unresolved, import/extensions
import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    // eslint-disable-next-line no-underscore-dangle
    this._floors = floors; // Assign floors
  }

  // Getter for floors
  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
export default SkyHighBuilding;
