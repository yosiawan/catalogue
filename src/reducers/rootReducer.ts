import { combineReducers } from "redux";
import { PersistState } from "redux-persist";
import storage from "redux-persist/es/storage";

import { productReducer, productState } from "./productReducer";

export type AppState = {
  products: productState;
  _persist?: PersistState;
}
export const appReducer = combineReducers<AppState>({
  products: productReducer
})

export function rootReducer(state: any, action: any) {
  if (action.type === "CLEAR_PERSISTED_STATE") {
      state = undefined
      storage.removeItem('persist:root')
  }
  return appReducer(state, action)
}