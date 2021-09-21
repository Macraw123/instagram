import gql from "graphql-tag";

export const LOGIN = gql`
  query Login($userEmail: String!, $password: String!) {
    login(userEmail: $userEmail, password: $password ){
             email
             password
           }
  }
`;

export const SIGNUP = gql`
  mutation AddUser($userEmail: String!, $name: String!, $username: String!, $password: String!){
    addUser(userEmail: $userEmail, name: $name, username: $username, password: $password){
        email
        password
  }
}
`;
