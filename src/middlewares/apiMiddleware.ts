import { API_CALL } from "../constants/apiConstants";

const getAPIMdl = (store: any) => (next: any) => (action: any) => {
  const { dispatch } = store
  if (action.type === API_CALL) {
    // fake API response
    dispatch(action.payload.onSuccess())
  }
  next(action)  
}

export const apiMiddlewares = [getAPIMdl]
