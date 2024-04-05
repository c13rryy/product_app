import type { FC } from "react"
import Typo from "../components/UI/Typography/Typography"
import { Link } from "react-router-dom"
import Login from "../screens/Login/Login"

const LoginPage: FC = () => {
  return (
    <section className="flex flex-col gap-[15px] items-center h-[100vh] justify-center">
      <Typo tag="h1">Login</Typo>
      <Login />
      <Typo type="defaultP">
        Don't have an account or{" "}
        <Link className="text-blue-500" to="/register">
          register
        </Link>
      </Typo>
    </section>
  )
}

export default LoginPage
