import gql from "graphql-tag";

export const LOGIN = gql`
  query Login($userEmail: String!, $password: String!) {
    login(userEmail: $userEmail, password: $password ){
             email
             password
           }
  }
`;

export const RESEND = gql`
  query SendEmail($userEmail: String!, $type: String!) {
    sendEmail(userEmail: $userEmail, type: $type ){
      email
    }
  }
`;

export const FORGOT = gql`
  query ForgotPassword($userEmail: String!) {
    forgotPassword(userEmail: $userEmail){
      email
    }
  }
`;
