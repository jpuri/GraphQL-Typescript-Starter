const Patient = require("../database/patient");
const uuidv1 = require("uuid/v1");

export const typeDefs = `
  type Patient {
    id: ID!
    name: String!
    address: String!
    age: Int!
  }

  type Query {
    allPatients: [Patient!]!
  }

  type Mutation {
    createPatient(name: String!, address: String!, age: Int!): Patient
    deletePatient(id: String!): String
  }
`;

export const resolvers = {
  Query: {
    allPatients: () => Patient.getAllPatients(),
  },

  Mutation: {
    createPatient: (_, data) => {
      const newPatient = Object.assign({ id: uuidv1() }, data);
      Patient.createPatient(newPatient);
      return newPatient;
    },
    deletePatient: (_, data) => {
      Patient.deletePatient(data.id);
      return "SUCCESS";
    }
  },
};
