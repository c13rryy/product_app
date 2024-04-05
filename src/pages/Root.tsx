import type { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="relative  min-h-screen">
        <div className="flex-grow flex-1">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
