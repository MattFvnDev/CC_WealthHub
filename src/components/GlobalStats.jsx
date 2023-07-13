import React from "react"

const GlobalStats = ({ title, value }) => (
  <div className="space-y-4 text-center">
    <h4 className="text-xl font-semibold text-[#00ff00] lg:mb-8 xl:text-2xl 2xl:mb-16 2xl:text-4xl">
      {title}
    </h4>
    <p className="text-lg font-bold text-white xl:text-2xl 2xl:text-3xl">
      {value}
    </p>
  </div>
)

export default GlobalStats
