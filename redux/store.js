import { configureStore } from '@reduxjs/toolkit';
import trackReducer from './slices/trackSlice';
import { apiSlice } from './slices/apiSlice';
import collectionReducer from './slices/collectionSlice';

const store = configureStore({
  reducer: {
    track: trackReducer,
    collection: collectionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
