import { configureStore } from "@reduxjs/toolkit"
import { coinsApi } from "./coinsApi"
import { coinsNewsApi } from "./newsApi"

export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    [coinsNewsApi.reducerPath]: coinsNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware, coinsNewsApi.middleware),
})