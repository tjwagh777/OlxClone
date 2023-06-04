import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './PostSlice';

export const store = configureStore({
  reducer: {
    post: PostReducer,
  },
});
