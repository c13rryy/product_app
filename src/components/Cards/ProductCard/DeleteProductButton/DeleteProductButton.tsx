import { useCallback, type FC } from "react"
import { Icon } from "../../../UI/Icon/Icon"
import { useDeleteProductMutation } from "../../../../store/api/api"
import { useNavigate } from "react-router-dom"
import { useDeleteLocalProductMutation } from "../../../../store/local-api/local-api"
interface DeleteProductButtonProps {
  id: number
}

const DeleteProductButton: FC<DeleteProductButtonProps> = ({ id }) => {
  const [deleteProduct] = useDeleteProductMutation()
  const [deleteLocalProduct] = useDeleteLocalProductMutation()
  const navigate = useNavigate()

  const hadnleClick = useCallback(() => {
    if (typeof id === "string") {
      deleteLocalProduct(id)
    } else {
      deleteProduct(id)
    }
    navigate("/products")
  }, [deleteLocalProduct, deleteProduct, id, navigate])

  return (
    <button
      onClick={hadnleClick}
      className="w-[40px] h-[40px] rounded-xl bg-black"
    >
      <Icon icon="trash" size={24} color="white" />
    </button>
  )
}

export default DeleteProductButton
