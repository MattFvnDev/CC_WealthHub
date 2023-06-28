import React from "react"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"

// Basic app layout
const AppLayout = () => (
  <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#13025c] to-[#09051f] font-inter">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default AppLayout
