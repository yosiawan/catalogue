import { 
  getProducts, 
  addNewData, 
  deleteProduct,
  updateProduct,
  setProducts,
  setNewProduct,
  setUpdatedProduct,
  setDeleteProduct
} from "./productActions";
import { 
  GET_PRODUCTS, 
  ADD_NEW_PRODUCT, 
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS,
  SET_NEW_PRODUCT,
  SET_UPDATED_PRODUCT,
  SET_DELETE_PRODUCT
} from "../constants/productConstants";

test("Get products", () => {
  expect(getProducts()).toEqual({ type: GET_PRODUCTS })
})

test("Add new data", () => {
  expect(addNewData({}, "1")).toEqual({ 
    type: ADD_NEW_PRODUCT, 
    payload: { 
      data: {}, 
      id: "1" 
    }
  })
})

test("Update product", () => {
  expect(updateProduct({}, "1")).toEqual({
    type: UPDATE_PRODUCT,
    payload: { 
      data: {}, 
      id: "1" 
    }
  })
})

test("Delete product", () => {
  expect(deleteProduct("1")).toEqual({
    type: DELETE_PRODUCT,
    payload: { id: "1" }
  })
})

test("Set products", () => {
  expect(setProducts({})).toEqual({
    type: SET_PRODUCTS, 
    payload: {}
  })
})

test("Set new product", () => {
  expect(setNewProduct({})).toEqual({
    type: SET_NEW_PRODUCT,
    payload: { data: {} }
  })
})

test("Set updated product", () => {
  expect(setUpdatedProduct({})).toEqual({
    type: SET_UPDATED_PRODUCT,
    payload: { data: {} }
  })
})

test("Set delete product", () => {
  expect(setDeleteProduct("1")).toEqual({
    type: SET_DELETE_PRODUCT,
    payload: { id: "1" }
  })
})
