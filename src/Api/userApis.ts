import axios from 'axios';
import {Alert} from 'react-native';

const hostURL = 'http://192.168.1.105:5000';

export const loginUser = async (email: string, password: string) => {
  try {
    const url = `${hostURL}/api/auth/login`;
    const {data} = await axios.post(url, {email, password});
    if (data.message == 'Incorrect email address.') {
      return Alert.alert(data.message);
    }
    return data;
  } catch (error: any) {
    Alert.alert('Failed to login', error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const url = `${hostURL}/api/user/user/${userId}`;
    const user = await axios.get(url);
    // console.log('API: ', user.data);
    return user.data;
  } catch (ex) {
    return Alert.alert('Sorry', String(ex));
  }
};

export const blockUser = async (userId: string, otherId: string) => {
  const url = `${hostURL}/api/user/block/${userId}`;
  axios.put(url, {toBlock: otherId}).then(res => {
    res.data.success
      ? Alert.alert('Success', 'USER HAS BEEN BLOCKED')
      : Alert.alert('Sorry', 'Failed to block user');
  });
};

export const unblockUser = async (userId: string, otherId: string) => {
  const url = `${hostURL}/api/user/unblock/${userId}`;
  axios.put(url, {toUnBlock: otherId}).then(res => {
    res.data.success
      ? Alert.alert('Succes', 'USER HAS BEEN UNBLOCKED')
      : Alert.alert('Sorry', 'Failed to block user');
  });
};

export const sendMessage = async (body: string, to: string, from: string) => {
  const url = `${hostURL}/api/message}`;
  let data = await axios.post(url, {to, from, body});
  return data;
};

export const getAllConversations = async () => {
  const url = `${hostURL}/api/message/conversations`;
  let data: any = await axios.get(url);
  return data.data;
};

export const getAllFriends = (userId: string) => {
  const url = `${hostURL}/api`;
};

export const signUpUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  gender: string,
  interests: string[],
) => {
  const url = `${hostURL}/api/auth/register`;

  let body = {
    firstName,
    lastName,
    email,
    password,
    gender,
    interests,
  };
  console.log('Running');

  axios
    .post(url, body)
    .then(res => {
      console.log(res.data);
      console.log('TEST');
    })
    .catch(e => {
      return Alert.alert('Falied', e);
    });
};
