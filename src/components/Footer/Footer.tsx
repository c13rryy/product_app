import { useMemo, type FC } from "react"
import { FOOTER_LINKS } from "../../data/navigation"
import { Link } from "react-router-dom"

const Footer: FC = () => {
  const footerLinks = useMemo(
    () =>
      FOOTER_LINKS.map(el => (
        <li key={el.text}>
          <Link
            className="text-[16px] leading-[140%] font-normal text-white"
            to={el.href}
          >
            {el.text}
          </Link>
        </li>
      )),
    [],
  )
  return (
    <footer className="bg-black p-20 flex items-center justify-center mt-[70px]">
      <nav>
        <ul className="flex gap-5">{footerLinks}</ul>
      </nav>
    </footer>
  )
}

export default Footer
