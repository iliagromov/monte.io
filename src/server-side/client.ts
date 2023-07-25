import { ApolloClient, InMemoryCache } from '@apollo/client';
import { env } from 'process';


export const client = new ApolloClient({
  uri: `https://montetuning.app/api/v1/makes`,
  cache: new InMemoryCache(),
});
