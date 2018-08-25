import {
  addVaccine,
  getAllVaccines,
  getVaccineById,
  getVaccineByTitle
} from './vaccine';

const resolvers = {
  DoseType: {
    unique: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5
  },
  Query: {
    getAllVaccines,
    getVaccineById,
    getVaccineByTitle
  },
  Mutation: {
    addVaccine
  }
};

export default resolvers;
