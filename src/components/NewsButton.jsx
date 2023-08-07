import React from "react"
import { Link } from "react-router-dom"

const NewsButton = ({ name }) => (
  <>
    <Link
      className="rounded-xl bg-[#d242fd] px-10 py-3 text-lg font-semibold hover:bg-[#870dac] lg:px-12 lg:py-4"
      to="news"
    >
      {name}
    </Link>
  </>
)

export default NewsButton
