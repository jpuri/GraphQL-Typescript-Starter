const assert = require("chai").assert;
const patient = require("./patient");

describe('Patient Data', () => {
  it('saves the content', async () => {
    const patientList = await patient.getAllPatients();
    console.log('patient', patientList)
  });
});
