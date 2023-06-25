import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlist: null,
  myCollections: [],
  likes: [],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setMyCollection: (state, action) => {
      state.myCollections.push(action.payload);
    },
    removeFromMyCollection: (state, action) => {
      state.myCollections = state.myCollections.filter(
        (item) => item.playlist.id !== action.payload
      );
    },
    setLikes: (state, action) => {
      state.likes.push(action.payload);
    },
    removeFromLikes: (state, action) => {
      state.likes = state.likes.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setMyCollection,
  setPlaylist,
  setLikes,
  removeFromLikes,
  removeFromMyCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;
