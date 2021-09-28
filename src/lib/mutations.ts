import gql from "graphql-tag";

export const SIGNUP = gql`
  mutation AddUser($userEmail: String!, $name: String!, $username: String!, $password: String!){
    addUser(userEmail: $userEmail, name: $name, username: $username, password: $password){
        email
        password
        id
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

export const SEND_MESSAGE=gql`
mutation sendMsg(
  $toemail:String!,
  $fromemail:String!,
  $created:String!,
  $message:String!,
  $image:String!,
  $video:String
){
  sendMessage(toemail:$toemail,fromemail:$fromemail,created:$created,message:$message,image:$image,video:$video){
    id
  }
}
`

export const DEL_CR=gql`
mutation delCR($roomId:Int!){
  deleteChatRoom(roomId:$roomId){
    owneremail
  }
}
`

export const MAKE_CR=gql`
  mutation make_cr($om:String!,$rm:String!){
  createChatRoom(owneremail:$om,recipientemail:$rm){
    owneremail
  }
}
`

export const UNSEND_MSG=gql`
mutation delMsg($id:Int!){
  unsendMessage(id:$id){
    id
  }
}
`