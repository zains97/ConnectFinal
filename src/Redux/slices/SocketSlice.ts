import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../Interfaces/UserInterface';

const initialState = {
  socket: null,
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    updateSocketState: (state, action) => {
      state.socket = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateSocketState} = socketSlice.actions;

export default socketSlice.reducer;
