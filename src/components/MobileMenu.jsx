import React from "react"
import { CgClose, CgMenuRight } from "react-icons/cg"
import { navLinks } from "../constants"
import { NavLink } from "react-router-dom"

const MobileMenu = ({ toggle, setToggle }) => (
  <div
    className="flex items-center md:hidden "
    onClick={() => setToggle((prev) => !prev)}
  >
    {toggle ? (
      <CgClose className="h-[42px] w-[42px] cursor-pointer stroke-1 text-white transition duration-200 ease-in-out hover:text-[#d242fd]" />
    ) : (
      <CgMenuRight className="h-[42px] w-[42px] cursor-pointer stroke-1 text-white transition duration-200 ease-in-out hover:text-[#d242fd]" />
    )}
    <div
      className={`${
        toggle ? `flex` : `hidden`
      } mobileMenu absolute left-0 right-0 top-16 mx-6 my-4 max-w-3xl justify-center rounded-xl bg-black p-6`}
    >
      <ul className="flex flex-col items-center ">
        {navLinks.map((navLink, index) => {
          return (
            <li
              key={navLink.id}
              className={`cursor-pointer text-[28px] font-bold text-white hover:text-[#d242fd]
                ${index === navLinks.length - 1 ? `mr-0` : `mb-4`}`}
            >
              <NavLink
                to={`${navLink.path}`}
                className="transition duration-200 ease-in-out"
              >
                {navLink.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default MobileMenu
