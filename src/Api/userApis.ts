import axios from 'axios';

const hostURL = 'https://connect-server-fyp.herokuapp.com';

export const loginUser = async (email: string, password: string) => {
  const url = `${hostURL}/api/auth/login`;
  const {data} = await axios.post(url, {email, password}).then(res => res.data);
  return data;
};
