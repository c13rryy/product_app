import { Button, TextField } from "@mui/material"
import { useEffect, type FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { LocalProduct, Product, ProductForm } from "../../../types"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ProductValidator } from "../../../lib/validators/product"
import {
  useCreateProductMutation,
  useEditProductMutation,
} from "../../../store/api/api"
import toast from "react-hot-toast"
import {
  useCreateLocalProductMutation,
  useEditLocalProductMutation,
} from "../../../store/local-api/local-api"

interface ProductFromProps {
  productData?: Product | LocalProduct
  id?: number | string
}

const ProductFrom: FC<ProductFromProps> = ({ productData, id }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(ProductValidator),
    defaultValues: {
      title: productData?.title || "",
      description: productData?.description || "",
      price: productData?.price.toString() || undefined,
      image: productData?.image || "",
      publish: false,
    },
  })

  const navigate = useNavigate()

  const [createProduct] = useCreateProductMutation()
  const [editProduct] = useEditProductMutation()
  const [createLocalProduct] = useCreateLocalProductMutation()
  const [editLocalProduct] = useEditLocalProductMutation()

  const onSubmit: SubmitHandler<ProductForm> = submitData => {
    const formData = {
      ...submitData,
      price: Number(submitData.price),
    }

    if (productData) {
      if (id && typeof id === "string") {
        console.log("check")
        editLocalProduct({ id: productData.id, formData })
      } else {
        editProduct({ id: productData?.id, formData })
      }
    } else {
      createProduct(formData).then(resultData => {
        if ("data" in resultData) {
          const localData = {
            title: resultData.data.title,
            description: resultData.data.description,
            image: resultData.data.image,
            price: resultData.data.price,
            publish: submitData.publish,
          }
          createLocalProduct(localData)
          toast.success("Succes")
        } else {
          toast.error("Smth went wrong")
        }
      })
    }

    navigate("/products")
  }

  useEffect(() => {
    if (Object.keys(errors).length) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const [_key, value] of Object.entries(errors)) {
        toast.error((value as { message: string }).message)
      }
    }
  }, [errors])
  return (
    <form
      className="flex flex-col gap-4 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="title"
              error={typeof errors.title?.message === "string"}
              label="Title"
              variant="outlined"
              className="w-full"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="description"
              error={typeof errors.description?.message === "string"}
              label="Description"
              variant="outlined"
              className="w-full"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="price"
              label="Price"
              error={typeof errors.price?.message === "string"}
              variant="outlined"
              type="number"
              className="w-full"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="image"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="image"
              error={typeof errors.image?.message === "string"}
              label="Image"
              variant="outlined"
              className="w-full"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="publish">Publish</label>
        <input id="publish" type="checkbox" {...register("publish")} />
      </div>
      <div className="flex items-center gap-[10px]">
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Link
          to="/"
          className="border-[1px] border-solid border-black py-1 px-3 rounded-[20px]"
        >
          Go back
        </Link>
      </div>
    </form>
  )
}

export default ProductFrom
