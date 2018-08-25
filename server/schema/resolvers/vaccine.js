import Vaccine from '../../model/vaccine';

export const getVaccineByTitle = (parent, { title }) => {
  return Vaccine.find({ title });
};

export const getVaccineById = (parent, { id }) => {
  return Vaccine.findById(id);
};

export const getAllVaccines = () => {
  return Vaccine.find({});
};

export const addVaccine = (parent, { title, description, doseType }) => {
  return new Vaccine({ title, description, doseType }).save();
};
