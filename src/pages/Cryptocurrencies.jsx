import React, { useEffect, useState } from "react"
import millify from "millify"
import { Link } from "react-router-dom"
import { useGetCoinsQuery } from "../services/coinsApi"

const Cryptocurrencies = ({ leading }) => {
  const count = leading ? 4 : 100
  const { data: coinsList, isFetching } = useGetCoinsQuery(count)
  const [coins, setCoins] = useState(coinsList?.data?.coins)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setCoins(coinsList?.data?.coins)
    const filteredCoins = coinsList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search)
    )
    setCoins(filteredCoins)
  }, [coinsList, search])

  if (isFetching) return "Loading..."

  return (
    <section className="container mx-auto px-6 py-6 lg:py-8">
      {!leading && (
        <div className="mb-8 mt-4 flex flex-col xl:mt-8 2xl:mb-12">
          <input
            className="text min-w-[270px] appearance-none self-center rounded-lg border-2 border-gray-500 px-3 py-2 leading-tight focus:border-yellow-500 focus:bg-white focus:outline-none"
            placeholder="Search Coin"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4 2xl:gap-14">
        {coins?.map((coin) => (
          <div
            className="flex flex-col text-white"
            key={coin.uuid}
            title={`${coin.rank}.${coin.name}`}
          >
            <Link to={`/cryptocurrencies/${coin.uuid}`}>
              <div className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6 transition delay-75 duration-200 ease-in-out hover:scale-105 hover:bg-indigo-500 xl:hover:scale-110">
                <div className="flex flex-row items-center justify-between border-b-2 pb-4">
                  <h4 className="text-xl font-semibold">{`${coin.rank}. ${coin.name}`}</h4>
                  <img
                    className="h-[32px] w-[32px] xl:h-[40px] xl:w-[40px]"
                    src={coin.iconUrl}
                    alt={coin.name}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p
                    className={`${"text-lg font-bold"} 
                    ${
                      coin.change >= 0
                        ? `${"text-[#00ff00]"}`
                        : `${"text-[#ff0000]"}`
                    }`}
                  >
                    Daily Change: {millify(coin.change)}%
                  </p>
                  <p className="text-base font-bold">
                    Price: ${millify(coin.price)}
                  </p>
                  <p className="text-base font-bold">
                    Market Cap: {millify(coin.marketCap)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Cryptocurrencies
