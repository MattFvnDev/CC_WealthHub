import React from "react"
import millify from "millify"
import { useGetCoinDetailsQuery } from "../services/coinsApi"
import { FaDollarSign, FaChartSimple, FaChartArea } from "react-icons/fa6"
import { FaExchangeAlt } from "react-icons/fa"
import { AiOutlineFieldNumber } from "react-icons/ai"
import { BsLightningChargeFill, BsExclamation } from "react-icons/bs"
import { IoPodium } from "react-icons/io5"
import { TiTick } from "react-icons/ti"
import { CgClose } from "react-icons/cg"
import { useParams } from "react-router-dom"

const Coin = () => {
  const { coinId } = useParams()
  const { data, isFetching } = useGetCoinDetailsQuery(coinId)
  const coinDetails = data?.data?.coin
  console.log(data)
  if (isFetching) return "Loading..."

  const detailStats = [
    {
      title: "USD Price:",
      value: `$${coinDetails?.price && millify(coinDetails?.price)}`,
      icon: <FaDollarSign />,
    },
    {
      title: "Rank:",
      value: coinDetails?.rank,
      icon: <AiOutlineFieldNumber />,
    },
    {
      title: "Daily Volume:",
      value: `$${
        coinDetails?.[`24hVolume`] && millify(coinDetails?.[`24hVolume`])
      }`,
      icon: <BsLightningChargeFill />,
    },
    {
      title: "Market Cap:",
      value: `$${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`,
      icon: <FaChartSimple />,
    },
    {
      title: "All time high:",
      value: `$${
        coinDetails?.allTimeHigh?.price &&
        millify(coinDetails?.allTimeHigh?.price)
      }`,
      icon: <IoPodium />,
    },
  ]

  const generalStats = [
    {
      title: "Total Markets:",
      value: coinDetails?.numberOfMarkets,
      icon: <FaChartArea />,
    },
    {
      title: "Total Exchanges:",
      value: coinDetails?.numberOfExchanges,
      icon: <FaExchangeAlt />,
    },
    {
      title: "Aprroved Supply:",
      value: coinDetails?.supply?.confirmed ? <TiTick /> : <CgClose />,
      icon: <BsExclamation />,
    },
    {
      title: "Total Supply:",
      value: `$${
        coinDetails?.supply?.total && millify(coinDetails?.supply?.total)
      }`,
      icon: <BsExclamation />,
    },
    {
      title: "Circulating:",
      value: `$${
        coinDetails?.supply?.circulating &&
        millify(coinDetails?.supply?.circulating)
      }`,
      icon: <BsExclamation />,
    },
  ]

  return (
    <section className="container mx-auto p-6">
      <div className="space-y-12 py-4 text-center lg:space-y-16 xl:space-y-24">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-semibold text-[#d242fd]">
            {coinDetails.name} ({coinDetails.symbol}) Price
          </h1>
          <p className="text-xl font-medium text-white">
            {coinDetails.name} price live in US Dollar (USD). Check out the
            latest coin stats and compare them with global ones.
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-10 sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:gap-16 xl:grid-cols-4 xl:gap-8">
          <div className="flex flex-col space-y-6 border-b-2 pb-4 lg:border-b-0 lg:pb-0 xl:border-r-2 xl:pr-8 2xl:pr-12">
            <h2 className="text-2xl font-semibold text-[#00ff00]">
              {coinDetails.name} Statistics
            </h2>
            <p className="text-lg font-medium text-white">
              Overview of {coinDetails.name} statistics such as rank, trading
              volume, currency value and more.
            </p>
            {detailStats.map(({ title, value, icon }) => (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <p className="mr-4 text-xl font-medium text-[#d242fd]">
                    {icon}
                  </p>
                  <p className="text-xl font-medium text-white">{title}</p>
                </div>
                <p className="text-2xl font-semibold text-[#00ff00]">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-6 border-b-2 pb-4 lg:border-b-0 lg:pb-0 xl:border-r-2 xl:pr-8 2xl:pr-12">
            <h2 className="text-2xl font-semibold text-[#00ff00]">
              Global Statistics
            </h2>
            <p className="text-lg font-medium text-white sm:pb-7">
              Overview presenting the global cryptocurrencies stats.
            </p>
            {generalStats.map(({ title, value, icon }) => (
              <div className="flex flex-row items-center justify-between text-center">
                <div className="flex flex-row items-center">
                  <p className="mr-4 text-2xl font-medium text-[#d242fd]">
                    {icon}
                  </p>
                  <p className="text-xl font-medium text-white">{title}</p>
                </div>
                <p className="text-2xl font-semibold text-[#00ff00]">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-6 border-b-2 pb-4 lg:border-b-0 lg:pb-0 xl:border-r-2 xl:pr-8 2xl:pr-12">
            <h2 className="text-2xl font-semibold text-[#d242fd]">
              Whats's {coinDetails.name}
            </h2>
            <p className="text-lg font-medium text-white">
              {coinDetails.description}
            </p>
          </div>
          <div className="flex flex-col space-y-6 border-b-2 pb-4 text-center lg:border-b-0 lg:pb-0 2xl:pr-12">
            <h2 className="text-2xl font-semibold text-[#d242fd]">
              {coinDetails.name} Useful Links
            </h2>
            {coinDetails.links?.map((link) => (
              <div
                className="flex flex-col space-y-2 text-start sm:text-center"
                key={link.name}
              >
                <h2 className="text-xl font-semibold text-white">
                  {link.type}
                </h2>
                <a
                  className="text-xl font-semibold text-[#00ff00]"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coin
