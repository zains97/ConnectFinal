import axios from 'axios';
import {Alert} from 'react-native';
import {IUser} from '../Interfaces/UserInterface';

const hostURL = `http://192.168.0.103:5000/api/friends`;

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
    data.success == true ? Alert.alert('Success') : Alert.alert('Failed');
  } catch (err) {
    console.log(err);
  }
};

export const cancelFriendRequest = (senderId: string, recipientId: string) => {
  console.log(senderId, recipientId);

  axios
    .put(`${hostURL}/cancel-request`, {senderId, recipientId})
    .then(res => {
      res.data.success == true
        ? Alert.alert('REQUEST CANCELLED')
        : Alert.alert('Failed to cancel request');
    })
    .catch(() => Alert.alert('Failed to cancel request'));
};
