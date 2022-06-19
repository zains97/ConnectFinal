import axios from 'axios';
import {IUser} from '../Interfaces/UserInterface';

const hostURL = 'http://192.168.0.106:3000/api/friends';

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
  try {
    axios.post(`${hostURL}/confirm-request`, {
      requesterId,
      recipientId,
      requestId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendFriendRequest = async (
  requester: IUser,
  recipient: String,
) => {
  try {
    const data = await axios.post(`${hostURL}/send-request`, {
      requester,
      recipient,
    });
    console.log(data.data.status);
  } catch (err) {
    console.log(err);
  }
};
