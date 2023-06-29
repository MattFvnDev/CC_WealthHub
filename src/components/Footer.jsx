import React from "react"
import { BsLinkedin, BsDiscord, BsTwitter } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import { Link } from "react-router-dom"

const Footer = () => (
  <footer className="container mx-auto flex-row-reverse items-center justify-between border-t border-[#00ff00] p-4 text-center lg:flex">
    <div className="flex flex-row items-center justify-center space-x-4 py-4 xl:space-x-6">
      <Link to="https://discord.com" target="_blank">
        <BsDiscord className="h-[32px] w-[32px] cursor-pointer text-white hover:text-[#d242fd] xl:h-[36px] xl:w-[36px]" />
      </Link>
      <Link to="https://twitter.com" target="_blank">
        <BsTwitter className="h-[32px] w-[32px] cursor-pointer text-white hover:text-[#d242fd] xl:h-[36px] xl:w-[36px]" />
      </Link>
      <Link to="https://www.linkedin.com" target="_blank">
        <BsLinkedin className="h-[32px] w-[32px] cursor-pointer text-white hover:text-[#d242fd] xl:h-[36px] xl:w-[36px]" />
      </Link>
      <Link to="https://www.whatsapp.com" target="_blank">
        <IoLogoWhatsapp className="h-[32px] w-[32px] cursor-pointer text-white hover:text-[#d242fd] xl:h-[36px] xl:w-[36px]" />
      </Link>
    </div>
    <p className="text-xs font-semibold text-gray-200 md:text-sm lg:text-lg xl:text-xl">
      &copy; {new Date().getFullYear()} WealthHub | All rights reserved
    </p>
  </footer>
)

export default Footer