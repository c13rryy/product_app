// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from "react-redux"
import { useMemo } from "react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { actions } from "../store/user/user-slice"

const rootActions = {
  ...actions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
