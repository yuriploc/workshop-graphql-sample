import { makeExecutableSchema } from 'graphql-tools';

const type = `
type Vaccine {
  id: ID!,
  title: String,!
  description: String!
}
`;

const rootQuery = `
  type Query {
    getVaccineById(id: ID!): Vaccine
  }
`;

const schemaDef = `
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [type, rootQuery, schemaDef],
  resolvers: {}
});

export default schema;
