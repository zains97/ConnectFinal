import axios from 'axios';
import {IUser} from '../Interfaces/UserInterface';

const hostURL = 'https://connect-server-fyp.herokuapp.com';

export const loginUser = async (email: string, password: string) => {
  const url = `${hostURL}/api/auth/login`;
  const {data} = await axios.post(url, {email, password}).then(res => res.data);
  return data;
};

export const getUser = async (userId: string) => {
  const url = `${hostURL}/api/user/user/${userId}`;
  const user = await axios.get(url);
  return user.data.data;
};
