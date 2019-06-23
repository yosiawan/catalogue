import { 
  GET_PRODUCTS, 
  ADD_NEW_PRODUCT, 
  DELETE_PRODUCT, 
  UPDATE_PRODUCT 
} from "../constants/productConstants";
import { 
  requestProducts, 
  postData, 
  callDeleteData, 
  callUpdateData 
} from "../actions/productActions";

export const  getProductsMdl = (store: any) => (next: any) => (action: any) => {
  const { dispatch } = store
  next(action)

  switch (action.type) {
    case GET_PRODUCTS: 
      dispatch(requestProducts())
      break;
    case ADD_NEW_PRODUCT:
      dispatch(postData(action.payload.data, action.payload.id))
      break;
    case UPDATE_PRODUCT:
      dispatch(callUpdateData(action.payload.data, action.payload.id))
      break;
    case DELETE_PRODUCT:
      dispatch(callDeleteData(action.payload.id))
      break;
  }
}

export const productMiddleware = [getProductsMdl]
