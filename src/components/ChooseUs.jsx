import React from "react"

import {
  phone,
  portfolio,
  catalog,
  rich,
  technology,
  transaction,
  wealth,
} from "../assets"

const ChooseUs = () => (
  <section className="container mx-auto px-6 py-6 lg:py-8">
    <h2 className="mb-4 mt-14 px-6 text-center text-3xl font-semibold text-[#00ff00] sm:mt-12 md:mb-16 lg:mb-20 lg:mt-16 lg:text-5xl xl:mt-32 2xl:mb-12 2xl:text-7xl">
      Why Customers <br/>
      Choose Us
    </h2>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
        <div className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6">
          <img
            className="h-[64px] w-[64px] rounded-full bg-white md:h-[128px] md:w-[128px]"
            src={phone}
            alt="phone"
          />
          <div className="flex flex-col space-y-4">
            <h4 className="text-2xl font-bold 2xl:text-3xl">
              Connect your Digital Wallet
            </h4>
            <p className="text-base font-normal text-[#00ff00] xl:text-xl">
              Use WealthHub's digital solution, Metamask or connect directly to
              the WealthHub.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6">
          <img
            className="h-[64px] w-[64px] rounded-full bg-white md:h-[128px] md:w-[128px]"
            src={catalog}
            alt="catalog"
          />
          <div className="flex flex-col space-y-4">
            <h4 className="text-2xl font-bold 2xl:text-3xl">
              Make your own portfolio
            </h4>
            <p className="text-base font-normal text-[#00ff00] xl:text-xl">
              Invest your money in coins and foreign currencies.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6">
          <img
            className="h-[64px] w-[64px] rounded-full bg-white md:h-[128px] md:w-[128px]"
            src={transaction}
            alt="transaction"
          />
          <div className="flex flex-col space-y-4">
            <h4 className="text-2xl font-bold 2xl:text-3xl">
              Set up Transactions
            </h4>
            <p className="text-base font-normal text-[#00ff00] xl:text-xl">
              Sell your coins and earn money on exchange rates.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="lg:object-contain xl:object-none"
          src={wealth}
          alt="Wallet with credit cards and money"
        />
      </div>
      <div className="grid grid-cols-1 gap-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
          <div className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6">
            <img
              className="h-[64px] w-[64px] rounded-full bg-white md:h-[128px] md:w-[128px]"
              src={rich}
              alt="money"
            />
            <div className="flex flex-col space-y-4">
              <h4 className="text-2xl font-bold 2xl:text-3xl">Get richer</h4>
              <p className="text-base font-normal text-[#00ff00] xl:text-xl">
                Grow your wealth with the best platform on the market.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6">
            <img
              className="h-[64px] w-[64px] rounded-full md:h-[128px] md:w-[128px]"
              src={technology}
              alt="technology"
            />
            <div className="flex flex-col space-y-4">
              <h4 className="text-2xl font-bold 2xl:text-3xl">
                Wealthhub technology
              </h4>
              <p className="text-base font-normal text-[#00ff00] xl:text-xl">
                Study and stay ahead of the competition.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border-2 bg-[#001951] p-6">
            <img
              className="h-[64px] w-[64px] rounded-full bg-white md:h-[128px] md:w-[128px]"
              src={portfolio}
              alt="portfolio"
            />
            <div className="flex flex-col space-y-4">
              <h4 className="text-2xl font-bold 2xl:text-3xl">
                Drive your Portfolio
              </h4>
              <p className="text-base font-normal text-[#00ff00] xl:text-xl">
                Discover, Invest, Manage and earn with WealthHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ChooseUs
