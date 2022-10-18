import axios from 'axios';

const hostURL = `http://192.168.0.107:5000/api/chatroom`;

const createChatroom = async (participants: string[], chatName: string) => {
  try {
    let {data} = await axios.post(hostURL);
    return data;
  } catch (error) {
    return {success: false};
  }
};

export const getChats = async (userId: string) => {
  try {
    let {data} = await axios.get(`${hostURL}/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
    return {success: false};
  }
};

export const getAllMessages = async (chatroomId: string) => {
  try {
    let {data} = await axios.get(`${hostURL}/all-messages/${chatroomId}`);
    return data;
  } catch (error) {
    return {success: false};
  }
};
