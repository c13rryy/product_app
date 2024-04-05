import { useTypedSelector } from "./useTypedSelector"

export function useAuth() {
  const { user } = useTypedSelector(state => state.user)

  return {
    isAuth: !!user,
  }
}
