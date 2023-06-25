import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track: [],
  currentTrack: null,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    removeCurrentTrack: (state, action) => {
      state.currentTrack = null;
    },
  },
});

export const { setTrack, setCurrentTrack, removeCurrentTrack } =
  trackSlice.actions;

export default trackSlice.reducer;
