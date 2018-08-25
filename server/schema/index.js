import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const types = `
  type Vaccine {
    id: ID!,
    title: String!,
    description: String!,
    doseType: DoseType!
  }

  enum DoseType {
    unique,
    two,
    three,
    four,
    five
  }
`;

const rootQuery = `
  type Query {
    getVaccineById(id: ID!): Vaccine
  }
`;

const mutation = `
  type Mutation {
    addVaccine(title: String!, description: String!): Vaccine
  }
`;

const schemaDef = `
  schema {
    query: Query,
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [types, rootQuery, mutation, schemaDef],
  resolvers
});

export default schema;
