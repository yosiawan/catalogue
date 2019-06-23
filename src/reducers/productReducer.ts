import { 
  SET_PRODUCTS, 
  SET_NEW_PRODUCT, 
  SET_DELETE_PRODUCT, 
  SET_UPDATED_PRODUCT 
} from "../constants/productConstants";
import { productsDataType } from "./productStateType";

export type productState = productsDataType;

export function productReducer(state: productState = {}, action: any) {
  switch(action.type) {
    case SET_PRODUCTS:
      return { ...state, ...action.payload }
    case SET_NEW_PRODUCT:
      return { ...state, ...action.payload.data}
    case SET_UPDATED_PRODUCT:
      return { ...state, ...action.payload.data }
    case SET_DELETE_PRODUCT:
      delete state[action.payload.id]
      return { ...state }
    default:
      return state
  }
}
