export interface IPost {
  _id: string;
  createDate: Date;
  postBody: string;
  tags: string;
  creator: string;
  creatorName: string;
  creatorImage: string;
  __v: number;
  comments: [];
}

export interface ITags {
  id: number;
  name: string;
}
