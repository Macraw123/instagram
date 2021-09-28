import gql from "graphql-tag";

export const LOGIN = gql`
  query Login($userEmail: String!, $password: String!) {
    login(userEmail: $userEmail, password: $password ){
             email
             password
             id
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

export const GET_MAIN_POSTS = gql`
query getMainPost($userid:Int!){
  getPostById(userId:$userid){
    created
    id
    caption
    userid
    like
    video
    image{
      imagelink
    }
    user{
      username
      email
    }
    comment{
      comment
      user{
        username
        name
      }
    }
  }
}
`

export const GET_MAIN_STORY_HEADER = gql`
query getMainStoryHeader($userid:Int!){
  getMainStoryUserById(userid:$userid){
    username
    id
  }
}
`

export const GET_MAIN_STORY = gql`
query getStoryById($userId:Int!){
  getMainStoryById(userId:$userId){
    image
    user{
      username
      profile
      name
    }
  }
}
`

export const GET_STORY_BY_USER_ID = gql`
query getStoryByUserId($userid:Int!){
	getStoryByUserId(userid:$userid){
			userid
      image
      video
        user{
          id
          username
          profile
        }
  }
}
`

export const FIND_USERS = gql`
query search($username:String!){
  searchUsers(username:$username){
    id
    name
    username
    profile
    email
  }
}
`

export const GET_FOLLOWINGS = gql`
query getFollowingsById($userId:Int!){
  getFollowingsById(userId:$userId){
    username
    name
    profile
    email
  }
}
`

export const GET_MESSAGE_BY_EMAIL = gql`
query getMessageByToEmail($toEmail:String!, $fromEmail:String!){
  getMessageByToEmail(toEmail:$toEmail,fromEmail:$fromEmail){
    message
    id
    image
    video
    fromemail
    toemail
    created
  }
}
`

export const MY_CHATS = gql`
query getMyChats($email:String!){
  getMyChats(myEmail:$email){
    id
    recipientemail
    user{
      username
      profile
      email
    }
  }
}
`