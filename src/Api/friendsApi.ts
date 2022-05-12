import axios from 'axios';

const hostURL = '192.168.0.106:4050/api/friends';

export const getFriendRequests = async (recipientId: string) => {
  let {data} = await axios.get(`${hostURL}/get-requests/${recipientId}`);
  return data;
};
