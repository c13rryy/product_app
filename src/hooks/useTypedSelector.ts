// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector, type TypedUseSelectorHook } from "react-redux"

import type { RootState } from "../store/store"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
