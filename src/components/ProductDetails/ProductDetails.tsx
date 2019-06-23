import React from "react"
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Card } from "react-bootstrap";

import { AppState } from "../../reducers/rootReducer";
import { productsDataType } from "../../reducers/productStateType";

import "./productDetails.css";

type ProductDetailsProp = RouteComponentProps<{ id: string }> & {
  product: productsDataType;
}

function ProductDetails(props: ProductDetailsProp) {

  const activeId = parseInt(props.match.params.id);

  if (!props.product[activeId]) {
    return <>Loading . . .</>
  }

  const { 
    image,
    name,
    price,
    sizes,
    description
  } = props.product[activeId]

  return (
    <div className="product-details__container">
      <Card className="product-details__card">
        <Card.Img style={{ marginBottom: 10 }} src={image}/>
        <Card.Title>
          {name}
        </Card.Title>
        <Card.Subtitle>
          <div>Rp.{price}</div>
          <div>
            Sizes: {
              sizes.map((size: any) => (
                <span>{size} </span>
              ))
            }
          </div>
        </Card.Subtitle>
        <Card.Body>
          {description ? description : "Description Not Available"}
        </Card.Body>
      </Card>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  product: state.products
})

export default connect(mapStateToProps)(ProductDetails);
