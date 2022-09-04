import axios from 'axios';
import {Alert} from 'react-native';
import {IPost} from '../Interfaces/PostInterfaces';

// https://connect-server-fyp.herokuapp.com
const hostURL = 'http://192.168.1.105:5000';

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
  postImage: string | undefined,
) => {
  const url = `${hostURL}/api/posts`;
  axios
    .post(url, {postBody, tags, creator, creatorImage, creatorName, postImage})
    .then(res => {
      Alert.alert('Post created');
    })
    .catch(e => Alert.alert(e));
};

export const newComment = async (
  creatorName: string,
  commentBody: string,
  creatorImage: string,
) => {
  const url = `${hostURL}/api/posts/new-comment/61f9db821e2712a7bb83602d`;
  axios
    .put(url, {creatorName, commentBody, creatorImage})
    .then(res => Alert.alert('Commented'))
    .catch(e => Alert.alert('Sorry', 'Could not create post'));
};

export const getFriendsPosts = async (friendsId: string[]) => {
  const url = `${hostURL}/api/posts/friends-post`;
  let res = await axios.post(url, {friendsId});
  return res.data;
};
