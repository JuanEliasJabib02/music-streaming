import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const SpootifyAPI = createApi({
  reducerPath: "spootifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RAPIDAPI-Key", "cc62e7ecc1mshc1e4809f5581591p1029c9jsn7b9bb78166de"),
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