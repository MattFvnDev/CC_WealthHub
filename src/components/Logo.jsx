import React from "react"
import { Link } from "react-router-dom"
import { logo } from "../assets"

const Logo = () => {
  // Custom scroll to the top of the page.
  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" })
  }

  return (
    <>
      <Link onClick={scrollToTop} className="flex items-center space-x-2">
        <img
          loading="lazy"
          src={logo}
          alt="Logo"
          className="h-[42px] w-[42px] object-contain"
        />
        <span className="hidden text-2xl font-extrabold text-[#d242fd] lg:inline-block">
          WealthHub
        </span>
      </Link>
    </>
  )
}

export default Logo
