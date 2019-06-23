import React, { Component } from "react"
import { Card, Button } from "react-bootstrap";
import { singleProductDataType } from "../../reducers/productStateType";

import "./productCard.css";

type ProductCardProp = {
  product: singleProductDataType;
  onImageClick: (img: string) => void;
  onDetailClick: () => void;
}

class ProductCard extends Component<ProductCardProp, {}> {
  render() {
    const { 
      product, 
      onImageClick, 
      onDetailClick 
    } = this.props

    return (
      <Card className="product-card__container">
        <Card.Img 
          onClick={() => onImageClick(product.image)} 
          variant="top" 
          src={product.image} 
        />
        <Card.Body>
          <Card.Title>
            {product.name}
          </Card.Title>
          <Card.Text>
            Lorem Ipsum Dolor Sit Amet consectetur adipiscing elit.
          </Card.Text>
          <Button 
            onClick={onDetailClick} 
            variant="primary"
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default ProductCard;