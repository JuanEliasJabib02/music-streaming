import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const SpootifyAPI = createApi({
  reducerPath: "spootifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RAPIDAPI-Key", "f8d010d7bamsh448713cb42b04d3p1d0a08jsn65d20e8ca833"),
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