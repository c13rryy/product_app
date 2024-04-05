import { useEffect, useMemo, useState, type FC } from "react"
import Wrapper from "../../components/UI/Wrapper/Wrapper"
import Typo from "../../components/UI/Typography/Typography"
import { useGetProductsQuery } from "../../store/api/api"
import { Link, useSearchParams } from "react-router-dom"
import ProductCard from "../../components/Cards/ProductCard/ProductCard"
import DeleteProductButton from "../../components/Cards/ProductCard/DeleteProductButton/DeleteProductButton"
import { useGetLocalProductsQuery } from "../../store/local-api/local-api"
import FilterButtons from "./FilterButtons/FilterButtons"
import { Button } from "@mui/material"
import { LoaderIcon } from "react-hot-toast"

const Products: FC = () => {
  const { data, isLoading } = useGetProductsQuery(null)
  const { data: localProducts, isLoading: localLoading } =
    useGetLocalProductsQuery(null)

  const [searchParams] = useSearchParams()

  const activeCategory = searchParams.get("category")

  const [visibleProducts, setVisibleProducts] = useState(8)
  const [totalProducts, setTotalProducts] = useState(0)

  const renderData = useMemo(() => {
    if (activeCategory === "published") {
      setVisibleProducts(8)
      return data
    }

    if (activeCategory === "unpublished") {
      setVisibleProducts(8)
      return localProducts
    }

    if (
      localProducts &&
      data &&
      (activeCategory === "all" || activeCategory === null)
    ) {
      setVisibleProducts(8)
      return [...localProducts, ...data]
    }
  }, [activeCategory, data, localProducts])

  const productsData = useMemo(
    () =>
      renderData?.slice(0, visibleProducts).map(product => (
        <li key={product.id} className="flex flex-col justify-between gap-2">
          <Link to={`${product.id}`}>
            <ProductCard
              id={product.id}
              title={product.title}
              imgUrl={product.image}
              price={product.price}
            />
          </Link>
          <div className="flex justify-between">
            <DeleteProductButton id={product.id} />
            <Link
              className="w-[40px] h-[40px] rounded-[15px] flex justify-center items-center bg-black text-white "
              to={`edit/${product.id}`}
            >
              Edit
            </Link>
          </div>
        </li>
      )),
    [renderData, visibleProducts],
  )

  useEffect(() => {
    setTotalProducts(renderData?.length || 0)
  }, [renderData])

  const showMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts =>
      Math.min(prevVisibleProducts + 8, totalProducts),
    )
  }

  const showAllProducts = () => {
    setVisibleProducts(totalProducts)
  }

  return (
    <section className="mt-12">
      <Wrapper>
        <Typo tag="h1">Products</Typo>
        <FilterButtons />
        {(isLoading || localLoading) && (
          <div className="flex h-[100vh] justify-center items-center">
            <div className="animate-spin">
              <LoaderIcon className="w-10 h-10" />
            </div>
          </div>
        )}
        <ul className="grid grid-cols-4 gap-6 mt-[20px]">{productsData}</ul>
        <div className="flex gap-3 justify-center mt-[30px]">
          <Button
            disabled={visibleProducts >= totalProducts}
            variant="contained"
            onClick={showMoreProducts}
          >
            Show 8 products
          </Button>
          <Button
            disabled={visibleProducts >= totalProducts}
            variant="outlined"
            onClick={showAllProducts}
          >
            Show All
          </Button>
        </div>
      </Wrapper>
    </section>
  )
}

export default Products
