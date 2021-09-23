import gql from "graphql-tag";

export const SIGNUP = gql`
  mutation AddUser($userEmail: String!, $name: String!, $username: String!, $password: String!){
    addUser(userEmail: $userEmail, name: $name, username: $username, password: $password){
        email
        password
  }
}
`;

export const VERIFY = gql`
  mutation VerifiedStatus($userEmail: String!){
    verifiedStatus(userEmail:$userEmail){
    email
  }
}
`;

export const CHANGEPASS = gql`
  mutation ChangePassword($userEmail: String!, $password: String!){
    changePassword(userEmail:$userEmail, password:$password){
    email
  }
}
`;