import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";


  export const client = new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache()
  });