import type { FC } from "react"
import { useActions } from "../../hooks/useActions"
import AuthForm from "../../components/Forms/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom"
import { register } from "../../providers/auth/auth"

const SignUp: FC = () => {
  const { loginUser } = useActions()
  const navigate = useNavigate()

  const handRegister = async (email: string, password: string) => {
    const user = await register(email, password)
    if (user) {
      loginUser({
        email: user.email,
        uid: user.uid,
      })
      navigate("/", {
        replace: true,
      })
    }
  }
  return <AuthForm title="sign up" handleClick={handRegister} />
}

export default SignUp
