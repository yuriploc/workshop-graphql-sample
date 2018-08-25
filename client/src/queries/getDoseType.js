import gql from 'graphql-tag';

const getDoseType = gql`
  query {
    __type(name: "DoseType") {
      enumValues {
        name
      }
    }
  }
`;

export default getDoseType;
