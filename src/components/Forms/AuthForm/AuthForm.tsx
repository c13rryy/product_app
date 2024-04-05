import { Button } from "@mui/material"
import { useState, type FC } from "react"

interface AuthFormProps {
  title: string
  handleClick: (email: string, pass: string) => void
}

const AuthForm: FC<AuthFormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (
    <div className="flex flex-col gap-[10px]">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
        className="bg-slate-300 pl-[8px] rounded-[15px] w-[300px]"
      />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="password"
        className="bg-slate-300 pl-[8px] rounded-[15px] w-[300px]"
      />
      <div className="flex justify-end mt-[10px]">
        <Button
          variant="contained"
          size="small"
          className="w-fit"
          onClick={() => handleClick(email, pass)}
        >
          {title}
        </Button>
      </div>
    </div>
  )
}

export default AuthForm
