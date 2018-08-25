import gql from 'graphql-tag';

const getAllVaccines = gql`
  query {
    getAllVaccines {
      title
      description
      doseType
    }
  }
`;

export default getAllVaccines;
