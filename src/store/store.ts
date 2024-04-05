import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { api } from "./api/api"
import { reducer } from "./modal/modal-slice"
import { localApi } from "./local-api/local-api"
import { reducer as userReducer } from "./user/user-slice"

const reducers = combineReducers({
  modal: reducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
  [localApi.reducerPath]: localApi.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: gDM => gDM().concat(api.middleware, localApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
