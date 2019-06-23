import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addNewData } from "../../../actions/productActions";
import { productsDataType } from "../../../reducers/productStateType";
import instanceToInputElement from "../instanceToInputElement";

import "./newProductForm.css";

type newProductFormProp = {
  addNewData: (data: productsDataType, id: string) => any
}

class NewProductForm extends Component<newProductFormProp, {}> {

  onAddNewProduct = () => {
    const { 
      newProductID,
      newProductName,
      newProductDescription,
      newProductImage,
      newProductPrice,
      newProductSizes
    } = this.refs;

    if (
      instanceToInputElement(newProductName).value === "" ||
      instanceToInputElement(newProductPrice).value === "" ||
      instanceToInputElement(newProductDescription).value === "" ||
      instanceToInputElement(newProductImage).value === "" ||
      instanceToInputElement(newProductSizes).value === ""
    ) {
      alert("Please complete the form before submitting");
    } else {
      this.props.addNewData(
        {
          [`${instanceToInputElement(newProductID).value}`]: {
            name: instanceToInputElement(newProductName).value,
            price: parseInt(instanceToInputElement(newProductPrice).value),
            description: instanceToInputElement(newProductDescription).value,
            image: instanceToInputElement(newProductImage).value,
            sizes: instanceToInputElement(newProductSizes).value.split("")
          }
        },
        instanceToInputElement(newProductID).value
      )
    }    
  }

  render() {
    return (
      <tr>
        <th>
          <input 
            type="text" 
            placeholder="ID" 
            ref="newProductID"
          />
        </th>
        <th>
          <input 
            type="text" 
            placeholder="Name" 
            ref="newProductName"
          />
        </th>
        <th>
          <input 
            type="number" 
            placeholder="Price" 
            ref="newProductPrice"
          />
        </th>
        <th>
          <input 
            type="text" 
            placeholder="Sizes" 
            ref="newProductSizes"
          />
        </th>
        <th>
          <textarea 
            placeholder="Description" 
            ref="newProductDescription"
          />
        </th>
        <th>
          <input 
            type="text" 
            placeholder="Image URL" 
            ref="newProductImage"
          />
        </th>
        <th>
          <Button onClick={this.onAddNewProduct}>Add New Product</Button>
        </th>
      </tr>
    )
  }  
}

const mapDispatchToProps = ({
  addNewData
})

export default connect(null, mapDispatchToProps)(NewProductForm);
