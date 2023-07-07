import React from "react"
import { useParams } from "react-router-dom"
import millify from "millify"
import { useGetCoinDetailsQuery } from "../services/coinsApi"

const Coin = () => {
  const { coinId } = useParams()
  const { data, isFetching } = useGetCoinDetailsQuery(coinId)
  const coinDetails = data?.data?.coin
  console.log(coinDetails)

  return (
    <div>Coin {coinId}</div>
  )
}

export default Coin