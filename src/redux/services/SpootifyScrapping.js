import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const SpootifyAPI = createApi({
  reducerPath: "spootifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RAPIDAPI-Key", "66978d38aamsh2ad17523d253acep1e954bjsnab8d64fc75f1"),
        headers.set("X-RapidAPI-Host", "spotify-scraper.p.rapidapi.com")

      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/chart/tracks/top" }),
    getTopArtist: builder.query({ query: () => "/chart/artists/top" }),
    getSongLyric: builder.query({ query: ({ songid }) => `/track/lyrics?trackId=${songid}` },),


  })
})


export const {
  useGetTopChartsQuery,
  useGetTopArtistQuery,
  useGetSongLyricQuery
} = SpootifyAPI