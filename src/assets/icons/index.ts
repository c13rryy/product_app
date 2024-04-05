import Shop from "./Shop"
import Trash from "./Trash"

export const content = {
  shop: Shop,
  trash: Trash,
}

export type IAvailableIcons = keyof typeof content
