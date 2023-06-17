import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track: [],
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },
  },
});

export const { setTrack } = trackSlice.actions;

export default trackSlice.reducer;
