import { useEffect, type FC } from "react"
import { useAuth } from "../hooks/useAuth"
import Typo from "../components/UI/Typography/Typography"

const Home: FC = () => {
  const { isAuth } = useAuth()

  useEffect(() => {
    if (!isAuth) {
      window.location.replace("/login")
    }
  }, [isAuth])

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <Typo tag="h1">Welcome to our shop</Typo>
    </section>
  )
}

export default Home
