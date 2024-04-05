import type { FC } from "react"
import Typo from "../components/UI/Typography/Typography"
import { Link } from "react-router-dom"
import SignUp from "../screens/SignUp/SignUp"

const RegisterPage: FC = () => {
  return (
    <section className="flex flex-col gap-[15px] items-center h-[100vh] justify-center">
      <Typo tag="h1">Register</Typo>
      <SignUp />
      <Typo type="defaultP">
        Already have an account{" "}
        <Link className=" text-blue-500" to="/login">
          Sign in
        </Link>
      </Typo>
    </section>
  )
}

export default RegisterPage
