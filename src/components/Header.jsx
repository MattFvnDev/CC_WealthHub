import React, { useState } from "react"
import { Icons, Logo, MobileMenu } from "./"
import { navLinks } from "../constants"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className="sticky top-0 z-10">
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
