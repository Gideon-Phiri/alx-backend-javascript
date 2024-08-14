mport { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert the row and get the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object with age set to 23
const updatedRow: RowElement = { 
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23 
};

// Update the row with the new data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the RowID
CRUD.deleteRow(newRowID);
