import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: JSON.parse(localStorage.getItem("user") || "null") ?? false,
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload))
      state.user = action.payload
    },

    logoutUser: state => {
      localStorage.removeItem("user")
      state.user = false
    },
  },
})

export const { reducer, actions } = userSlice
