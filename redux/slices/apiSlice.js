// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPlaylist: builder.query({
      query: () => `/playlist/`,
    }),
    getPlaylistTracks: builder.query({
      query: (id) => `/playlist/allTracks/${id}`,
    }),
    getPopularTrack: builder.query({
      query: () => `/tracks/popular`,
    }),
    getNewTrack: builder.query({
      query: () => `/tracks/new`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPlaylistQuery,
  useGetNewTrackQuery,
  useGetPopularTrackQuery,
  useGetPlaylistTracksQuery,
} = apiSlice;
