import axios from 'axios';

const hostURL = 'http://192.168.172.91:4050/api/friends';

export const getFriendRequests = async (recipientId: string) => {
  try {
    let {data} = await axios.get(`${hostURL}/get-requests/${recipientId}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
