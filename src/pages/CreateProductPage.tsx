import type { FC } from "react"
import Wrapper from "../components/UI/Wrapper/Wrapper"
import Typo from "../components/UI/Typography/Typography"
import ProductFrom from "../components/Forms/ProductForm/ProductFrom"

const CreateProductPage: FC = () => {
  return (
    <section>
      <Wrapper>
        <Typo tag="h1" text="Create" />
        <div className="mt-[50px] max-w-[1200px]">
          <ProductFrom />
        </div>
      </Wrapper>
    </section>
  )
}

export default CreateProductPage
