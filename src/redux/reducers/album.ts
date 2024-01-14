// auth.js
import {createSlice} from '@reduxjs/toolkit';

const album = createSlice({
  name: 'album',
  initialState: {
    albumData: null,
    isLoading: false,
    isAvailable: false,
  },
  reducers: {
    setAlbumData: (state, action) => {
      state.albumData = action.payload;
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsAvailable: (state, action) => {
      state.isAvailable = action.payload;
    },
  },
});

export const {setAlbumData, setLoader, setIsAvailable} = album.actions;
export default album.reducer;
