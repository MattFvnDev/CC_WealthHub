import React from "react"
import { wallet, walletbtc } from "../assets"

const JoinUs = () => (
  <section className="container mx-auto px-6 py-6 lg:py-8">
    <div className="relative mt-6 flex flex-row items-center justify-center lg:mt-32 2xl:mt-40">
      <img
        className=" Pulse absolute right-32 hidden h-[108px] w-[108px] lg:right-16 lg:flex xl:right-24 xl:h-[128px] xl:w-[128px] 2xl:right-52"
        src={wallet}
        alt=""
      />
      <h2 className="mb-8 text-center text-4xl font-semibold text-[#f3f2f4] lg:text-5xl 2xl:text-7xl">
        Join us via
        <span className="text-[#00ff00] lg:text-6xl 2xl:text-8xl">
          <br />
          Telegram
        </span>
      </h2>
      <img
        className="Pulse absolute left-32 hidden h-[108px] w-[108px] lg:left-16 lg:flex xl:left-24 xl:h-[128px] xl:w-[128px] 2xl:left-52"
        src={walletbtc}
        alt=""
      />
    </div>
    <p className="mt-4 text-center text-xl lg:text-2xl 2xl:text-4xl">
      Grow your wealth and manage it together with us in one platform.
    </p>
    <div className="my-8 flex justify-center md:my-16 lg:my-20 xl:my-24">
      <a
        className="min-w-[180px] self-center rounded-xl bg-[#d242fd] px-10 py-3 text-center text-lg font-semibold hover:bg-[#870dac] lg:px-12 lg:py-4"
        rel="noreferrer"
        target="_blank"
        href="https://web.telegram.org/a"
      >
        Join
      </a>
    </div>
  </section>
)

export default JoinUs
