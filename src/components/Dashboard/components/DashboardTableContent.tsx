import React, { Component } from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Pagination } from "react-bootstrap";

import instanceToInputElement from "../instanceToInputElement";
import { getProducts, deleteProduct, updateProduct } from "../../../actions/productActions";
import { productsDataType } from "../../../reducers/productStateType";
import { AppState } from "../../../reducers/rootReducer";

type dashboardTableContentProp = {
  products: productsDataType;
  getProducts: () => AnyAction;
  deleteProduct: (id: string) => AnyAction;
  updateProduct: (data: productsDataType, id: string) => AnyAction;
}

type dashboardTableContentState = {
  activeRow: string;
  currentPage: number;
}

class DashboardTableContent extends Component<dashboardTableContentProp, dashboardTableContentState> {

  state: dashboardTableContentState = {
    activeRow: "",
    currentPage: 0
  }
  
  componentDidMount() {
    let { getProducts, products } = this.props;

    if (Object.keys(products).length < 10) {
      getProducts()
    }
  }

  onDeleteClicked(id: string) {
    if(window.confirm('Are You Sure You Want To Delete This product?')){
      this.props.deleteProduct(id)
    }
  }

  onSaveClicked(id: string) {
    const {
      editProductName,
      editProductPrice,
      editProductSizes,
      editProductDescription,
      editProductImage
    } = this.refs

    if (
      instanceToInputElement(editProductName).value === "" ||
      instanceToInputElement(editProductPrice).value === "" ||
      instanceToInputElement(editProductSizes).value === "" ||
      instanceToInputElement(editProductDescription).value === "" ||
      instanceToInputElement(editProductImage).value  === "" 
    ) {
      alert("Please complete the form before submitting");
    } else {
      this.props.updateProduct(
        {
          [id]: {
            name: instanceToInputElement(editProductName).value,
            price: parseInt(instanceToInputElement(editProductPrice).value),
            description: instanceToInputElement(editProductDescription).value,
            image: instanceToInputElement(editProductImage).value,
            sizes: instanceToInputElement(editProductSizes).value.split("")
          }
        },
        id
      )
      this.setState({ activeRow: "" });
    }
  }

  renderProducts() {
    let temp = [];
    const { products } = this.props;
    const { currentPage } = this.state;

    for (let productId in products) {
      if (productId === this.state.activeRow) {
        temp.push(
          <tr>
            <th>{productId}</th>
            <th><input ref="editProductName" defaultValue={products[productId].name}/></th>
            <th><input ref="editProductPrice" defaultValue={`${products[productId].price}`}/></th>
            <th><input ref="editProductSizes" defaultValue={products[productId].sizes}/></th>
            <th><input ref="editProductDescription" defaultValue={products[productId].description}/></th>
            <th><input ref="editProductImage" defaultValue={products[productId].image}/></th>
            <th>
              <Button 
                variant="outline-success"
                onClick={() => this.onSaveClicked(productId)}
              >
                SAVE
              </Button>
              <Button 
                variant="outline-danger"
                onClick={() => this.setState({ activeRow: "" })}
              >
                CANCEL
              </Button>
            </th>
          </tr>
        )
      } else {
        temp.push(
          <tr>
            <th>{productId}</th>
            <th>{products[productId].name}</th>
            <th>{products[productId].price}</th>
            <th>{products[productId].sizes}</th>
            <th>{products[productId].description}</th>
            <th>{products[productId].image}</th>
            <th>
              <Button onClick={() => this.setState({ activeRow: productId })}>Edit</Button>
              <Button 
                variant="danger"
                onClick={() => this.onDeleteClicked(productId)}
              >
                Delete
              </Button>
            </th>
          </tr>
        )
      }
    }

    let availablePages = Math.ceil(temp.length) / 5;

    // get 5 items per page based on current page
    let page = temp.slice(
      5 * currentPage, 
      temp[5 * (currentPage + 1)] ? 5 * (currentPage + 1) : temp.length
    );

    // create pagination buttons
    let pagination = []
    for (let i = 1; i < availablePages + 1; i++) {
      pagination.push(
        <Pagination.Item onClick={() => this.setState({ currentPage: i - 1 })}>{i}</Pagination.Item>
      )
    }

    return (
      <>
        {page}
        <tr>
          <th colSpan={7}>
            <Pagination>
              {pagination}
            </Pagination>
          </th>
        </tr>
      </>
    )
  }

  render() {
    return this.renderProducts();
  }
}

const mapStateToProps = (state: AppState) => ({
  products: state.products
})

const mapDispatchToProps = {
  getProducts,
  updateProduct,
  deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTableContent);
