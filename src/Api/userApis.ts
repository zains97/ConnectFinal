import axios from 'axios';
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
  return user.data.data;
};
