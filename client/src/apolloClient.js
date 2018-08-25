import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});

export default client;
