import React, { useState } from "react"
import { money } from "../assets"

const CurrencyCard = ({ data }) => {
  const [currencies, setCurrency] = useState(data?.rates)
  // const currencies = data.rates
  // console.log(currency)

  return (
    <>
      <h2 className="mb-8 text-center text-3xl font-semibold text-[#d242fd] md:mb-16 lg:mb-20 lg:text-6xl 2xl:mb-32 2xl:text-7xl">
        Currency Exchange Rates
      </h2>
      <p className="mb-8 text-center text-xl font-semibold text-white md:text-2xl lg:mb-8 2xl:mb-16 2xl:text-4xl">
        Table {data.table} Dated{" "}
        <span className="text-center text-xl font-semibold text-[#00ff00] md:text-2xl lg:mb-8 2xl:mb-16 2xl:text-4xl">
          {data.effectiveDate}
        </span>
      </p>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 xl:grid-cols-4 xl:gap-12 2xl:gap-14">
        {currencies?.map((currency, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6"
          >
            <div className="flex flex-row-reverse justify-between">
              <img
                className="h-[50px] w-[50px] xl:h-[64px] xl:w-[64px]"
                src={money}
                alt="Cash"
              />
              <h2 className="text-2xl font-semibold text-white  sm:text-3xl">
                {currency.code}
              </h2>
            </div>
            <h4 className="text-lg font-bold text-[#d242fd]">
              {currency.currency.toUpperCase()}
            </h4>
            <p className="text-2xl font-bold text-[#00ff00]">
              PLN {currency.mid}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default CurrencyCard
