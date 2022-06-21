import axios from 'axios';
import {Alert} from 'react-native';
import {IUser} from '../Interfaces/UserInterface';

const hostURL = 'http://192.168.0.106:3000';

export const loginUser = async (email: string, password: string) => {
  const url = `${hostURL}/api/auth/login`;
  const {data} = await axios.post(url, {email, password}).then(res => res.data);
  console.log('API RESPONSE', data);
  return data;
};

export const getUser = async (userId: string) => {
  const url = `${hostURL}/api/user/user/${userId}`;
  const user = await axios.get(url);
  return user.data;
};

export const blockUser = async (userId: string, otherId: string) => {
  const url = `${hostURL}/api/user/block/${userId}`;
  axios.put(url, {toBlock: otherId}).then(res => {
    res.data.success
      ? Alert.alert('Succes', 'USER HAS BEEN BLOCKEd')
      : Alert.alert('Sorry', 'Failed to block user');
  });
};

export const unblockUser = async (userId: string, otherId: string) => {
  const url = `${hostURL}/api/user/unblock/${userId}`;
  axios.put(url, {toUnBlock: otherId}).then(res => {
    res.data.success
      ? Alert.alert('Succes', 'USER HAS BEEN BLOCKEd')
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
