export interface IPost {
  _id: string;
  createDate: any;
  postBody: string;
  tags: string[];
  creator: string;
  creatorName: string;
  creatorImage: string;
  __v: number;
  comments: [];
  postImage: string;
}

export interface ITags {
  id: number;
  name: string;
}
