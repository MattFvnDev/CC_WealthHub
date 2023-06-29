import React from "react"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"

// Basic app layout
const AppLayout = () => (
  <div className="flex min-h-screen flex-col bg-[#001951] font-inter ">
    {/*bg-[#001951] bg-gradient-to-b from-[#1a0579] to-[#09051f] */}
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default AppLayout
