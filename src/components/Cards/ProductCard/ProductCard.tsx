import type { FC } from "react"
import Typo from "../../UI/Typography/Typography"
import { currencyFormatter } from "../../../lib/utils"

interface ProductCardProps {
  id: number
  title: string
  imgUrl: string
  price: number
}

const ProductCard: FC<ProductCardProps> = ({ title, imgUrl, id, price }) => {
  return (
    <>
      <div className="bg-gray-500 rounded-[20px] xl:px-4 py-5 px-3 flex flex-col gap-2 h-full relative">
        <div className="w-full h-[300px] relative image-block">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full max-w-full object-cover rounded-[12px]"
          />
        </div>
        <div className="flex flex-col h-full justify-between">
          <Typo tag="h3" color="white">
            {title}
          </Typo>
          <div className="flex items-center justify-between">
            <Typo type="sectionP" color="white">
              {currencyFormatter.format(price)}
            </Typo>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
