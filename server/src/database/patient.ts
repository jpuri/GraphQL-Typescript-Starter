const DB = require("./index");

interface Patient {
  id: string;
  name: string;
  address: string;
  age: number;
}

async function getAllPatients(): Promise<any>  {
  return await DB.get("SELECT * FROM patient");
}

async function createPatient(patient: Patient): Promise<any> {
  const { id, name, address, age } = patient;
  const query = {
    text: "INSERT INTO patient(id, name, address, age) VALUES($1, $2, $3, $4)",
    values: [ id, name, address, age ],
  };
  return await DB.mutate(query);
}

async function deletePatient(id: string): Promise<any> {
  const query = {
    text: "DELETE FROM patient where id = $1",
    values: [ id ],
  };
  return await DB.mutate(query);
}


module.exports = {
  getAllPatients,
  createPatient,
  deletePatient,
};
