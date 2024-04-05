/* eslint-disable react-hooks/rules-of-hooks */
import type { FC } from "react"
import Wrapper from "../../components/UI/Wrapper/Wrapper"
import Typo from "../../components/UI/Typography/Typography"
import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../../store/api/api"
import SingleProductCard from "../../components/Cards/SingleProductCard/SingleProductCard"
import { useGetLocalProductQuery } from "../../store/local-api/local-api"

const SingleProduct: FC = () => {
  const { id } = useParams()
  if (Number(id) <= 20) {
    const { data } = useGetProductQuery(id ?? "")
    return (
      <section className="mt-12">
        <Wrapper>
          <Typo tag="h1">Infromation about Product</Typo>
          <div className="mt-[60px]">
            {data && (
              <SingleProductCard
                title={data?.title}
                description={data?.description}
                price={data?.price}
                rate={data?.rating.rate}
                category={data?.category}
                imgUrl={data?.image}
              />
            )}
          </div>
        </Wrapper>
      </section>
    )
  } else {
    const { data: localProduct } = useGetLocalProductQuery(id ?? "")
    return (
      <section className="mt-12">
        <Wrapper>
          <Typo tag="h1">Infromation about Product</Typo>
          <div className="mt-[60px]">
            {localProduct && (
              <SingleProductCard
                title={localProduct?.title}
                description={localProduct?.description}
                price={localProduct?.price}
                imgUrl={localProduct?.image}
              />
            )}
          </div>
        </Wrapper>
      </section>
    )
  }
}

export default SingleProduct
