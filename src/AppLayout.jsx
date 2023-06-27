import React from "react"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"

// Basic app layout
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default AppLayout
