import axios from 'axios';
import {Alert} from 'react-native';

// https://connect-server-fyp.herokuapp.com
const hostURL = 'http://192.168.0.104:5000';

export const getAllPosts = async () => {
  const {data} = await (await fetch(`${hostURL}/api/posts`)).json();
  return data;
};

export const newPost = (
  postBody: string,
  tags: string[],
  creator: string,
  creatorImage: string,
  creatorName: string,
) => {
  const url = `${hostURL}/api/posts`;

  axios
    .post(url, {postBody, tags, creator, creatorImage, creatorName})
    .then(res => {
      console.log(res.data);
      Alert.alert('Post created');
    })
    .catch(e => Alert.alert(e));
};
