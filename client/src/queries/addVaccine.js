import gql from 'graphql-tag';

const addVaccine = gql`
  mutation addVaccine(
    $title: String!
    $description: String!
    $doseType: DoseType!
  ) {
    addVaccine(title: $title, description: $description, doseType: $doseType) {
      id
    }
  }
`;

export default addVaccine;
