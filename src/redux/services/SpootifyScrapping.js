import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const SpootifyAPI = createApi({
  reducerPath: "spootifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RAPIDAPI-Key", "e551743d2dmshdfa4b326d4ec95cp10667ejsn489eed3c6f23"),
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