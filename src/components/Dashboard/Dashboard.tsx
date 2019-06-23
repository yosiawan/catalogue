import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { AnyAction } from "redux";

import { deleteProduct, updateProduct } from "../../actions/productActions";
import { AppState } from "../../reducers/rootReducer";
import { productsDataType } from "../../reducers/productStateType";
import NewProductForm from "./components/NewProductForm";
import DashboardTableContent from "./components/DashboardTableContent";

type dashboardProp = {
  deleteProduct: (id: string) => AnyAction;
  updateProduct: (data: productsDataType, id: string) => AnyAction;
}

class Dashboard extends Component<dashboardProp, {}> {

  render() {
    return (
      <div>
        <Table size="sm" responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Sizes</th>
              <th>Description</th>
              <th>Image URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <DashboardTableContent/>
          </tbody>
          <tfoot>
            <NewProductForm/>
          </tfoot>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  products: state.products
})

const mapDispatchToProps = {
  updateProduct,
  deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
