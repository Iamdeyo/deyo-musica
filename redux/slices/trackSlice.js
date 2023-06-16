import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track: null,
  allTracks: [],
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },
  },
});

export const { setAllTracks, setTrack } = trackSlice.actions;

export default trackSlice.reducer;
