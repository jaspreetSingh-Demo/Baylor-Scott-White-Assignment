// auth.js
import {createSlice} from '@reduxjs/toolkit';

const users = createSlice({
  name: 'users',
  initialState: {
    userList: null,
    expandedItemList: null,
    isLoading: false,
    albumLoader: false,
    albumList: null,
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setExpandedItemList: (state, action) => {
      state.expandedItemList = action.payload;
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    setLoadingAlbum: (state, action) => {
      state.albumLoader = action.payload;
    },
    setAlbumData: (state, action) => {
      state.albumList = action.payload;
    },
  },
});

export const {
  setUserList,
  setExpandedItemList,
  setLoader,
  setLoadingAlbum,
  setAlbumData,
} = users.actions;
export default users.reducer;
