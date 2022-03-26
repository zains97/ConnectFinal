import axios from 'axios';

const hostURL = 'https://connect-server-fyp.herokuapp.com';

export const getAllPosts = async () => {
  const {data} = await (await fetch(`${hostURL}/api/posts`)).json();
  return data;
};

export const newPost = (
  postBody: string,
  tags: string,
  creator: string,
  creatorImage: string,
  creatorName: string,
) => {
  const url = `${hostURL}/api/posts`;
  axios
    .post(url, {postBody, tags, creator, creatorImage, creatorName})
    .then(res => console.log(res.data));
};
