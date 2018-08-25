import gql from 'graphql-tag';

const getDoseTypes = gql`
  query {
    __type(name: "DoseType") {
      enumValues {
        name
      }
    }
  }
`;

export default getDoseTypes;
