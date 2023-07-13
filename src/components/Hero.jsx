import React from "react"
import { Button, GlobalStats, NewsButton } from "./"
import { coins, ethereumcoin } from "../assets"
import { useGetCoinsQuery } from "../services/coinsApi"
import millify from "millify"
import { Cryptocurrencies, News } from "../pages"

const Hero = () => {
  const { data, isFetching } = useGetCoinsQuery(4)
  const worldwideData = data?.data?.stats
  // console.log(worldwideData)
  if (isFetching) return "Loading..."

  return (
    <section className="container mx-auto">
      <div className=" mt-4 px-6 md:mt-14 lg:mt-24 2xl:mt-40">
        <h1 className="mb-8 text-center text-4xl font-semibold text-[#d242fd] md:mb-16 lg:mb-20 lg:text-6xl 2xl:mb-32 2xl:text-7xl">
          Worldwide Cryptocurrency Stats
        </h1>
        <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4">
          <GlobalStats title="Total Coins" value={worldwideData.totalCoins} />
          <GlobalStats
            title="Market Cap"
            value={millify(worldwideData.totalMarketCap)}
          />
          <GlobalStats
            title="Markets"
            value={millify(worldwideData.totalMarkets)}
          />
          {/* <GlobalStats
            title="Exchanges"
            value={millify(worldwideData.totalExchanges)}
          /> */}
          <GlobalStats
            title="24h Volume"
            value={millify(worldwideData.total24hVolume)}
          />
        </div>
      </div>
      <div className="relative mt-6 flex flex-row items-center justify-center px-6 lg:mt-32 2xl:mt-40">
        <img
          className=" absolute right-32 hidden h-[108px] w-[108px] animate-bounce lg:flex xl:right-24 2xl:right-0"
          src={ethereumcoin}
          alt=""
        />
        <h1 className="text-center text-3xl font-semibold text-[#f3f2f4] lg:text-5xl 2xl:text-6xl">
          Check and Trade <br className="hidden lg:flex xl:hidden" />
          your favorite coins
        </h1>
        <img
          className="absolute left-32 hidden h-[108px] w-[108px] animate-bounce lg:flex xl:left-24 2xl:left-0"
          src={coins}
          alt=""
        />
      </div>
      <h2 className="mb-4 mt-8 px-6 text-center text-2xl font-semibold text-[#00ff00] sm:mt-12 lg:mt-16 lg:text-5xl xl:mt-32 2xl:mb-12 2xl:text-6xl">
        The World's Leading Coins
      </h2>
      <Cryptocurrencies leading />
      <div className="my-8 flex justify-center md:my-16 lg:my-20">
        <Button name="More Coins" />
      </div>
      <h2 className="mb-4 mt-8 px-6 text-center text-2xl font-semibold text-[#00ff00] sm:mt-12 lg:mt-16 lg:text-5xl xl:mt-32 2xl:mb-12 2xl:text-6xl">
        Latest Cryptocurrency News
      </h2>
      <News leading />
      <div className="my-8 flex justify-center md:my-16 lg:my-20 ">
        <NewsButton name="More News" />
      </div>
    </section>
  )
}

export default Hero
