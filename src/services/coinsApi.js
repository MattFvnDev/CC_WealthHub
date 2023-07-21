import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY 
const rapidApiHost = "coinranking1.p.rapidapi.com"
const rapidApiUrl = "https://coinranking1.p.rapidapi.com"

const apiHeaders = {
  "X-RapidAPI-Key": rapidApiKey,
  "X-RapidAPI-Host": rapidApiHost,
}

const createRequest = (url) => ({
  url,
  headers: apiHeaders,
})

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({ baseUrl: rapidApiUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCoinDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
})

export const { useGetCoinsQuery, useGetCoinDetailsQuery } = coinsApi
