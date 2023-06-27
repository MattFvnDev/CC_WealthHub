import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Currencies, Cryptocurrencies, News, Coin } from "./pages"
import AppLayout from "./AppLayout"

export function Router() {
  // Defining all routes
  const BrowserRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="currencies" element={<Currencies />} />
          <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="cryptocurrencies/:coinId" element={<Coin />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  return <BrowserRoutes />
}
