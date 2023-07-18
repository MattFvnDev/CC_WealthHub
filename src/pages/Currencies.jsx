import React, { useEffect, useState } from "react"
import axios from "axios"
import { CurrencyCard } from "../components"

const Currencies = () => {
  const [currenciesData, setCurrenciesData] = useState([])

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const url = import.meta.env.VITE_NBP_API_URL
        const response = await axios.get(url)
        setCurrenciesData(response?.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getCurrencies()
  }, [])
  // console.log(currenciesData)

  return (
    <div className="container mx-auto px-6 py-6 lg:py-8">
      {currenciesData.map((data) => (
        <CurrencyCard data={data} />
      ))}
    </div>
  )
}

export default Currencies
