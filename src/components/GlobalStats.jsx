import React from "react"

const GlobalStats = () => {
  return (
    <>
      <div className="space-y-4 text-center">
        <h4 className="text-lg font-semibold text-[#00ff00] md:text-xl lg:animate-pulse xl:text-2xl 2xl:mb-16 2xl:text-3xl">
          Total Coins
        </h4>
        <p className="text-lg font-bold text-[#f3f2f4] md:text-xl xl:text-2xl 2xl:text-3xl">
          5
        </p>
      </div>
      <div className="space-y-4 text-center">
        <h4 className="text-lg font-semibold text-[#00ff00] md:text-xl lg:animate-pulse xl:text-2xl 2xl:mb-16 2xl:text-3xl">
          Market Cap
        </h4>
        <p className="text-lg font-bold text-[#f3f2f4] md:text-xl xl:text-2xl 2xl:text-3xl">
          5
        </p>
      </div>
      <div className="space-y-4 text-center">
        <h4 className="text-lg font-semibold text-[#00ff00] md:text-xl lg:animate-pulse xl:text-2xl 2xl:mb-16 2xl:text-3xl">
          Markets
        </h4>
        <p className="text-lg font-bold text-[#f3f2f4] md:text-xl xl:text-2xl 2xl:text-3xl">
          5
        </p>
      </div>
      <div className="space-y-4 text-center">
        <h4 className="text-lg font-semibold text-[#00ff00] md:text-xl lg:animate-pulse xl:text-2xl 2xl:mb-16 2xl:text-3xl">
          Exchanges
        </h4>
        <p className="text-lg font-bold text-[#f3f2f4] md:text-xl xl:text-2xl 2xl:text-3xl">
          5
        </p>
      </div>
      <div className="col-span-full space-y-4 text-center sm:col-start-3 sm:col-end-4 md:col-start-2 lg:col-span-1 lg:col-end-6">
        <h4 className="text-lg font-semibold text-[#00ff00] md:text-xl lg:animate-pulse xl:text-2xl 2xl:mb-16 2xl:text-3xl">
          24h Volume
        </h4>
        <p className="text-lg font-bold text-[#f3f2f4] md:text-xl xl:text-2xl 2xl:text-3xl">
          5
        </p>
      </div>
    </>
  )
}

export default GlobalStats
