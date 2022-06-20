import {configureStore} from '@reduxjs/toolkit';
import meReducer from '../slices/MeSlice';
import socketReducer from '../slices/SocketSlice';

export const store = configureStore({
  reducer: {
    me: meReducer,
    socket: socketReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
