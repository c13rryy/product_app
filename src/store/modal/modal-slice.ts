import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface InitailData {
  isOpen: boolean
  id: number | null
}

const initialState: InitailData = {
  isOpen: false,
  id: null,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<number>) => {
      state.isOpen = true
      state.id = action.payload
    },
    closeModal: state => {
      state.isOpen = false
      state.id = null
    },
  },
})

export const { reducer, actions } = modalSlice
