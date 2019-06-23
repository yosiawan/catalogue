import { 
  GET_PRODUCTS, 
  SET_PRODUCTS,
  ADD_NEW_PRODUCT,
  SET_NEW_PRODUCT,
  DELETE_PRODUCT,
  SET_DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SET_UPDATED_PRODUCT,
} from "../constants/productConstants";
import { API_CALL } from "../constants/apiConstants";
import { fakeProductsFactory } from "../helpers/fakeProductsFactory";
import { productsDataType } from "../reducers/productStateType";

// Log 
export function getProducts() {
  return { type: GET_PRODUCTS }
}

export function addNewData(data: productsDataType, id: string) {
  return { 
    type: ADD_NEW_PRODUCT,
    payload: { data, id }
  }
}

export function updateProduct(data: productsDataType, id: string) {
  return {
    type: UPDATE_PRODUCT,
    payload: { data, id }
  }
}

export function deleteProduct(id: string) {
  return { 
    type: DELETE_PRODUCT,
    payload: { id }
  }
}

// API calls
export function requestProducts() {
  return { 
    type: API_CALL,
    payload: {
      method: "GET",
      url: "/products",
      onSuccess: () => setProducts(fakeProductsFactory()),
      onError: () => alert("Failed get product"),
    }
  }
}

export function postData(data: productsDataType, id: string) {
  return {
    type: API_CALL,
    payload: { 
      onError: () => alert("Failed to add product"),
      onSuccess: () => setNewProduct(data),
      method: "POST",
      url: "/products",
      data, 
      id
    }
  }
}

export function callUpdateData(data: productsDataType, id: string) {
  return {
    type: API_CALL,
    payload: { 
      onError: () => alert("Failed to add product"),
      onSuccess: () => setUpdatedProduct(data),
      method: "POST",
      url: "/products",
      data, 
      id
    }
  }
}

export function callDeleteData(id: string) {
  return {
    type: API_CALL,
    payload: { 
      onError: () => alert("Failed to delete product"),
      onSuccess: () => setDeleteProduct(id),
      method: "POST",
      url: "/products",
      id
    }
  }
}

// Set State
export function setProducts(payload: productsDataType) {
  return { type: SET_PRODUCTS, payload }
}

export function setNewProduct(data: productsDataType) {
  return {
    type: SET_NEW_PRODUCT,
    payload: { data }
  }
}

export function setUpdatedProduct(data: productsDataType) {
  return {
    type: SET_UPDATED_PRODUCT,
    payload: { data }
  }
}

export function setDeleteProduct(id: string) {
  return {
    type: SET_DELETE_PRODUCT,
    payload: { id }
  }
}
