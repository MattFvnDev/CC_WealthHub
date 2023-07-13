import React from "react"
import { ChooseUs, Hero, JoinUs } from "../components"

const Home = () => {
  return (
    <div className="container mx-auto py-4 text-white">
      <Hero />
      <ChooseUs />
      <JoinUs />
    </div>
  )
}

export default Home
