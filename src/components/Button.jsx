import React from "react"
import { Link } from "react-router-dom"

const Button = ({ name }) => (
  <button className="bg-[#d242fd] px-10 py-3 text-lg font-semibold hover:bg-[#870dac] lg:px-12 lg:py-4 rounded-xl">
    <Link to="cryptocurrencies">{name}</Link>
  </button>
)

export default Button