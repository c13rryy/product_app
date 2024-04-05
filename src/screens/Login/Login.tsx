import type { FC } from "react"
import { useActions } from "../../hooks/useActions"
import AuthForm from "../../components/Forms/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom"
import { login } from "../../providers/auth/auth"

const Login: FC = () => {
  const { loginUser } = useActions()
  const navigate = useNavigate()

  const handleLogin = async (email: string, password: string) => {
    const user = await login(email, password)
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
  return <AuthForm title="sign in" handleClick={handleLogin} />
}

export default Login
