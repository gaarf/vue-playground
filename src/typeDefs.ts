import { gql } from 'apollo-server';

export default gql`

  type Example {
    result: String
  }

  type Query {
    hello(name: String): Example
  }
`;
