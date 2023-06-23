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
    setLikes: (state, action) => {
      state.likes.push(action.payload);
    },
  },
});

export const { setMyCollection, setPlaylist, setLikes } =
  collectionSlice.actions;

export default collectionSlice.reducer;
