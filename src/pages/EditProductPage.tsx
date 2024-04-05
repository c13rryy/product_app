/* eslint-disable react-hooks/rules-of-hooks */
import type { FC } from "react"
import Wrapper from "../components/UI/Wrapper/Wrapper"
import Typo from "../components/UI/Typography/Typography"
import ProductFrom from "../components/Forms/ProductForm/ProductFrom"
import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../store/api/api"
import DeleteProductButton from "../components/Cards/ProductCard/DeleteProductButton/DeleteProductButton"
import { useGetLocalProductQuery } from "../store/local-api/local-api"
import { LoaderIcon } from "react-hot-toast"

const EditProductPage: FC = () => {
  const { id } = useParams()
  const { data } =
    Number(id) <= 20
      ? useGetProductQuery(id ?? "")
      : useGetLocalProductQuery(id ?? "")

  if (data) {
    return (
      <section>
        <Wrapper>
          <div className="flex items-center justify-between">
            <Typo tag="h1" text={`Edit - ${data.title}`} />
            <DeleteProductButton id={data.id} />
          </div>
          <div className="mt-[50px] max-w-[1200px]">
            <ProductFrom productData={data} id={id} />
          </div>
        </Wrapper>
      </section>
    )
  } else {
    return (
      <div className="flex justify-center h-[100vh] items-center">
        <div className="animate-spin">
          <LoaderIcon className="w-10 h-10" />
        </div>
      </div>
    )
  }
}

export default EditProductPage
