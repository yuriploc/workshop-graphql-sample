const resolvers = {
  Query: {
    getVaccineById: (parent, { id }) => {
      return {
        id: 1,
        title: `test`,
        description: `teest`,
        doseType: `four`
      };
    }
  }
};

export default resolvers;
