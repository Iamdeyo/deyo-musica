import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlist: null,
  myCollections: [],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setMyCollection: (state, action) => {
      state.myCollections = action.payload;
    },
  },
});

export const { setMyCollection, setPlaylist } = collectionSlice.actions;

export default collectionSlice.reducer;
