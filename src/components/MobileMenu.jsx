import React, {useState}from "react"
import { CgClose, CgMenuRight } from "react-icons/cg"
import { navLinks } from "../constants"
import { NavLink } from "react-router-dom"

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className="flex items-center md:hidden"
      onClick={() => setToggle((prev) => !prev)}
    >
      {toggle ? (
        <CgClose className="h-[42px] w-[42px] cursor-pointer stroke-1 text-white hover:text-[#d242fd]" />
      ) : (
        <CgMenuRight className="h-[42px] w-[42px] cursor-pointer stroke-1 text-white hover:text-[#d242fd]" />
      )}
      <div
        className={`${
          toggle ? `flex` : `hidden`
        } absolute left-0 right-0 top-20 mx-6 my-2 min-w-[120px] max-w-xl justify-center rounded-xl bg-black/50 p-6`}
      >
        <ul className="flex flex-col items-center ">
          {navLinks.map((navLink, index) => {
            return (
              <li
                key={navLink.id}
                className={`cursor-pointer text-[28px] font-bold text-white hover:text-[#d242fd]
                ${index === navLinks.length - 1 ? `mr-0` : `mb-4`}`}
              >
                <NavLink to={`${navLink.path}`}>{navLink.label}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
