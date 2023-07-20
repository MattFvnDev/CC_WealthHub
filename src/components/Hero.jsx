import React from "react"
import { Link } from "react-router-dom"
import { Button, GlobalStats, NewsButton, Loader } from "./"
import { coins, ethereumcoin, coinsbanknote } from "../assets"
import { useGetCoinsQuery } from "../services/coinsApi"
import millify from "millify"
import { Cryptocurrencies, News } from "../pages"

const Hero = () => {
  const { data, isFetching } = useGetCoinsQuery(4)
  const worldwideData = data?.data?.stats
  // console.log(worldwideData)
  if (isFetching) return <Loader />

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 px-6 py-6 md:grid-cols-2 md:gap-8 lg:mt-32 lg:gap-16 xl:gap-24 2xl:gap-40">
        <div className="flex max-w-[590px] flex-col justify-center text-center md:items-start md:text-start lg:pl-16 xl:pl-28 2xl:pl-36">
          <h1 className="text-4xl font-semibold xl:mb-4 xl:text-6xl 2xl:mb-8">
            Let's build wealth together
          </h1>
          <p className="my-4 text-base font-normal text-[#00ff00] lg:text-lg xl:text-2xl">
            WealthHub is the most convenient platform to trade cryptocurrency
            and exchange currencies. Sign up now and build your cryptocurrency
            portfolio today.
          </p>
          <div className="my-4 justify-center md:my-8">
            <button
              type="button"
              className="rounded-xl bg-[#d242fd] px-10 py-3 text-lg font-semibold hover:bg-[#870dac] lg:px-12 lg:py-4 2xl:mt-10"
            >
              <Link to="currencies">Get Started</Link>
            </button>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="right-25 absolute top-[25px] h-[300px] w-[300px] animate-pulse rounded-full bg-[#d242fd] opacity-70 blur-[120px] filter sm:top-[60px] sm:h-[350px] sm:w-[350px] lg:top-[100px]" />
          <img
            loading="lazy"
            className="object-cover"
            src={coinsbanknote}
            alt=""
          />
        </div>
      </div>
      <div className="mt-4 px-6 md:mt-14 lg:mt-24 2xl:mt-40">
        <h1 className="mb-8 text-center text-3xl font-semibold text-[#d242fd] md:mb-16 lg:mb-20 lg:text-6xl 2xl:mb-32 2xl:text-7xl">
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
          loading="lazy"
          className=" absolute right-32 hidden h-[108px] w-[108px] animate-bounce lg:flex xl:right-24 2xl:right-0"
          src={ethereumcoin}
          alt="Ethereum Coin"
        />
        <h1 className="text-center text-3xl font-semibold text-[#f3f2f4] lg:text-5xl 2xl:text-6xl">
          Check and Trade <br className="hidden lg:flex xl:hidden" />
          your favorite coins
        </h1>
        <img
          loading="lazy"
          className="absolute left-32 hidden h-[108px] w-[108px] animate-bounce lg:flex xl:left-24 2xl:left-0"
          src={coins}
          alt="Crypto Coins"
        />
      </div>
      <h2 className="mb-4 mt-14 px-6 text-center text-2xl font-semibold text-[#00ff00] sm:mt-12 lg:mt-16 lg:text-5xl xl:mt-32 2xl:mb-12 2xl:text-6xl">
        The World's Leading Coins
      </h2>
      <Cryptocurrencies leading />
      <div className="my-4 flex justify-center md:my-12">
        <Button name="More Coins" />
      </div>
      <h2 className="mb-4 mt-14 px-6 text-center text-2xl font-semibold text-[#00ff00] sm:mt-12 lg:mt-16 lg:text-5xl xl:mt-32 2xl:mb-12 2xl:text-6xl">
        Latest Cryptocurrency News
      </h2>
      <News leading />
      <div className="my-4 flex justify-center md:my-12 ">
        <NewsButton name="More News" />
      </div>
    </section>
  )
}

export default Hero
