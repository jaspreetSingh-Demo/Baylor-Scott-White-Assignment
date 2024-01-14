import {configureStore} from '@reduxjs/toolkit';
import album from './reducers/album';
import users from './reducers/users';

const store = configureStore({
  reducer: {
    album: album,
    users: users,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
