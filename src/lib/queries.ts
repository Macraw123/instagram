import gql from "graphql-tag";

export const LOGIN = gql`
  query Login($userEmail: String!, $password: String!) {
    login(userEmail: $userEmail, password: $password ){
             email
             password
           }
  }
`;
