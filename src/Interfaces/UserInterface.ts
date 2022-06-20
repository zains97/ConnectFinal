export interface IUser {
  __v: number;
  _id: string;
  blockedUsers: any[];
  chatID: [];
  email: string;
  firstName: string;
  friendsId: [];
  gender: string;
  interests: [];
  isAdmin: boolean;
  lastName: string;
  password: string;
  postID: [];
  profilePic: string;
  sentFriendRequests: string[];
  recievedFriendRequests: string[];
}

export interface IFriendRequest {
  __v: Number;
  _id: String;
  recipient: String;
  requester: {
    _id: String;
    name: String;
    profilePic: any;
    userId: String;
  };
  status: String;
}
