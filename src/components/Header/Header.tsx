import { useMemo, type FC } from "react"
import { Icon } from "../UI/Icon/Icon"
import { NAVBAR_LINKS } from "../../data/navigation"
import { Link, useNavigate } from "react-router-dom"
import Wrapper from "../UI/Wrapper/Wrapper"
import { Button } from "@mui/material"
import { useActions } from "../../hooks/useActions"
import { useAuth } from "../../hooks/useAuth"
import { logout } from "../../providers/auth/auth"

const Header: FC = () => {
  const { logoutUser } = useActions()
  const { isAuth } = useAuth()

  const navigate = useNavigate()

  const handleLogout = async (): Promise<void> => {
    await logout()
    logoutUser()
    navigate("/login", {
      replace: true,
    })
  }

  const navLinks = useMemo(
    () =>
      NAVBAR_LINKS.map(el => (
        <li key={el.href}>
          <Link
            className="text-[18px] leading-normal font-normal text-white"
            to={el.href}
          >
            {el.text}
          </Link>
        </li>
      )),
    [],
  )
  return (
    <header className="h-[50px] flex items-center bg-black">
      <Wrapper className="flex items-center justify-between">
        <div>
          <Link to="/">
            <Icon icon="shop" size={30} color="#fff" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-4">{navLinks}</ul>
        </nav>

        {isAuth && (
          <div>
            <Button variant="contained" size="medium" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        )}
      </Wrapper>
    </header>
  )
}

export default Header
