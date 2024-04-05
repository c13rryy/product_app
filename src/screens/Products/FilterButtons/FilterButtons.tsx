import type { FC } from "react"
import { Link } from "react-router-dom"
import { FILTER_DATA } from "../../../data/filterData"

const FilterButtons: FC = () => {
  return (
    <div className="mt-[20px] flex items-center gap-2">
      {FILTER_DATA.map(el => (
        <Link
          key={el.text}
          to={el.href}
          className="text-[18px] leading-5 text-white py-1 px-4 bg-black rounded-[20px]"
        >
          {el.text}
        </Link>
      ))}
    </div>
  )
}

export default FilterButtons
