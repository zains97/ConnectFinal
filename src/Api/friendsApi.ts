import axios from 'axios';
import {Alert} from 'react-native';
import {IUser} from '../Interfaces/UserInterface';

const hostURL = `http://192.168.0.104:5000/api/friends`;

export const getFriendRequests = async (recipientId: string) => {
  try {
    let {data} = await axios.get(`${hostURL}/get-requests/${recipientId}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const acceptFriendRequest = (
  requesterId: String,
  recipientId: String,
  requestId: String,
) => {
  axios
    .put(`${hostURL}/confirm-request`, {
      requesterId,
      recipientId,
      requestId,
    })
    .then(res => {
      console.log(res);
    })
    .catch(e => Alert.alert(e.message));
};

export const sendFriendRequest = async (
  requester: IUser,
  recipient: String,
) => {
  try {
    const {data} = await axios.post(`${hostURL}/send-request`, {
      requester,
      recipient,
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
