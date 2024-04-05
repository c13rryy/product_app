import type { FC } from "react"
import Typo from "../../UI/Typography/Typography"
import { currencyFormatter } from "../../../lib/utils"

interface SingleProductCardProps {
  title: string
  description: string
  price: number
  rate?: number
  category?: string
  imgUrl: string
}

const SingleProductCard: FC<SingleProductCardProps> = ({
  title,
  description,
  price,
  rate,
  category,
  imgUrl,
}) => {
  return (
    <div className="flex gap-[30px]">
      <div className="w-full h-[400px] relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full max-w-full object-cover rounded-[25px]"
        />

        {rate && (
          <div className="absolute top-[15px] left-[20px] w-[50px] h-[50px] flex justify-center items-center bg-black rounded-full">
            <Typo type="defaultP" text={rate} color="white" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Typo tag="h1">{title}</Typo>
          {category && (
            <div className="py-1 px-3 rounded-xl bg-black w-fit">
              <Typo type="defaultP" color="white">
                {category}
              </Typo>
            </div>
          )}
        </div>
        <Typo type="sectionP" color="black">
          {description}
        </Typo>
        <Typo type="sectionP" color="black">
          {currencyFormatter.format(price)}
        </Typo>
      </div>
    </div>
  )
}

export default SingleProductCard
