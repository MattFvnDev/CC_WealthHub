import React, { useState } from "react"
import { Icons, Logo, MobileMenu } from "./"
import { navLinks } from "../constants"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)

  return (
    <header
      className={
        color
          ? "bg-[#000000] sticky top-0 z-10 shadow-sm"
          : "sticky top-0 z-10 bg-transparent shadow-none"
      }
    >
      <nav className="container mx-auto flex justify-between p-6">
        <Logo />
        <ul className="hidden items-center md:inline-flex">
          {navLinks.map((navLink, index) => {
            return (
              <li
                key={navLink.id}
                className={`text-[20px] font-bold text-white hover:text-[#d242fd] xl:text-[24px]
        
                ${index === navLinks.length - 1 ? `mr-0` : `mr-10`}`}
              >
                <NavLink
                  to={`${navLink.path}`}
                  className="transition delay-75 duration-200 ease-in-out"
                >
                  {navLink.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <MobileMenu toggle={toggle} setToggle={setToggle} />
        <Icons />
      </nav>
    </header>
  )
}

export default Header
