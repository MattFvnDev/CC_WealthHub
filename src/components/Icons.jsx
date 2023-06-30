import React from "react"
import { Link } from "react-router-dom"
import { BsTwitter, BsDiscord } from "react-icons/bs"

const Icons = () => (
  <div className="hidden items-center space-x-6 lg:inline-flex xl:space-x-8">
    <Link to="https://discord.com" target="_blank">
      <BsDiscord className="h-[42px] w-[42px] text-white transition delay-75 duration-150 ease-in-out hover:scale-125 hover:text-[#d242fd]" />
    </Link>
    <Link to="https://twitter.com" target="_blank">
      <BsTwitter className=" h-[42px] w-[42px] text-white transition delay-75 duration-150 ease-in-out hover:scale-125 hover:text-[#d242fd]" />
    </Link>
  </div>
)

export default Icons
