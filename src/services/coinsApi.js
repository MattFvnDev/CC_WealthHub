import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const rapidApiKey = import.meta.env.VITE_RAPID_API_CRYPTO_KEY
const rapidApiHost = import.meta.env.VITE_RAPID_API_CRYPTO_HOST
const rapidApiUrl = import.meta.env.VITE_RAPID_API_CRYPTO_URL

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
      query: () => createRequest("/coins"),
    }),
  }),
})

export const { useGetCoinsQuery } = coinsApi
