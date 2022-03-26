import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../Interfaces/UserInterface';

export interface IMe {
  token: string;
  user: IUser;
}

export interface IMeSlice {
  me: IMe;
}

const initialState: IMeSlice = {
  me: {
    token: '',
    user: {
      __v: 0,
      _id: '',
      blockedUsers: [],
      chatID: [],
      email: '',
      firstName: '',
      friendsId: [],
      gender: '',
      interests: [],
      isAdmin: false,
      lastName: '',
      password: '',
      postID: [],
      profilePic: '',
    },
  },
};

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    updateMeState: (state, action: PayloadAction<IMe>) => {
      state.me = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateMeState} = meSlice.actions;

export default meSlice.reducer;
