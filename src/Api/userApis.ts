import axios from 'axios';
import {Alert} from 'react-native';
import {IUser} from '../Interfaces/UserInterface';

const hostURL = 'http://192.168.0.103:5000';

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
  axios
    .put(url, {toBlock: otherId})
    .then(res => {
      res.data.success
        ? Alert.alert('Success', 'USER HAS BEEN BLOCKED')
        : Alert.alert('Sorry', 'Failed to block user');
    })
    .catch(e => {
      return Alert.alert('Something went wrong.');
    });
};

export const unblockUser = async (userId: string, otherId: string) => {
  const url = `${hostURL}/api/user/unblock/${userId}`;
  axios.put(url, {toUnBlock: otherId}).then(res => {
    res.data.success
      ? Alert.alert('Success', 'USER HAS BEEN UNBLOCKED')
      : Alert.alert('Sorry', 'Failed to unblock user');
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

export const getAllFriends = (
  friendsId: string[],
  setFriends: React.Dispatch<React.SetStateAction<IUser[] | undefined>>,
) => {
  const url = `${hostURL}/api/user/get-friends`;
  axios.put(url, {friendsId}).then(res => {
    if (res.data.success == true) {
      setFriends(res.data.friends);
    } else {
      Alert.alert('Failed to get friends, try again');
    }
  });
};

export const signUpUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  gender: string,
  interests: string[],
  profilePic: string,
) => {
  const url = `${hostURL}/api/auth/register`;

  let body = {
    firstName,
    lastName,
    email,
    password,
    gender,
    interests,
    profilePic: profilePic == '' ? undefined : profilePic,
  };

  axios
    .post(url, body)
    .then(() => {
      Alert.alert('Congrats, Successfully created new user!');
    })
    .catch(e => {
      Alert.alert('Sorry', e.message);
    });

  console.log('BODY: ', body);
};

export const updateLocation = (userId: string, location: Object) => {
  let url = `${hostURL}/api/user/update-location`;
  axios.patch(url, {userId, location}).catch(() => {});
};
