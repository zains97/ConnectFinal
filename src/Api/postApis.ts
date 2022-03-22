import axios from 'axios';

const hostURL = 'https://connect-server-fyp.herokuapp.com';

export const getAllPosts = async () => {
  const {data} = await (await fetch(`${hostURL}/api/posts`)).json();
  return data;
};
