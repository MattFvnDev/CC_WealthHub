import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const rapidApiKey = import.meta.env.VITE_RAPID_API_NEWS_KEY
const rapidApiHost = import.meta.env.VITE_RAPID_API_NEWS_HOST
const rapidApiUrl = import.meta.env.VITE_RAPID_API_NEWS_URL

const apiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": rapidApiKey,
  "X-RapidAPI-Host": rapidApiHost,
}

const createRequest = (url) => ({
  url,
  headers: apiHeaders,
})

export const coinsNewsApi = createApi({
  reducerPath: "coinsNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: rapidApiUrl }),
  endpoints: (builder) => ({
    getCoinsNews: builder.query({
      query: ({ searchCategory, count }) =>
        createRequest(
          `/news/search?q=${searchCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})

export const { useGetCoinsNewsQuery } = coinsNewsApi
