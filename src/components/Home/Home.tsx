import React, { Component } from "react"
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller"
import { RouteComponentProps } from "react-router";

import { productsDataType } from "../../reducers/productStateType";
import { getProducts } from "../../actions/productActions";
import ProductCard from "../ProductCard/ProductCard";
import ImagePopUp from "../ImagePopUp/ImagePopUp";

import "./home.css";

type homeProp = RouteComponentProps & {
  products: productsDataType; 
  getProducts: () => void;
}

type homeState = {
  showModal: boolean;
  modalImage: string;
  hasMore: boolean;
}

class Home extends Component<homeProp, homeState> {
  
  state = {
    showModal: false,
    modalImage: "",
    hasMore: true
  }

  loadMore = () => {
    if (Object.keys(this.props.products).length >= 15) {
      this.setState({ hasMore: false })
    } else if (Object.keys(this.props.products).length < 15) {
      this.setState({ hasMore: true })
      this.props.getProducts()
    }
  }
  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  renderItems() {
    let temp = [];
    for (let productId in this.props.products) {
      temp.push(
        <ProductCard 
          onImageClick={img => this.setState({ showModal: true, modalImage: img })} 
          onDetailClick={() => this.props.history.push(`/product/${productId}`)}
          product={this.props.products[productId]} 
        />
      )
    }
    return temp;
  }

  render() {
    const {
      showModal,
      modalImage
    } = this.state;
    const { hasMore } = this.state;
    return (
      <div className="home__container">
        <ImagePopUp
          showModal={showModal}
          modalImage={modalImage}
          handleClose={this.handleClose}
        />
        <InfiniteScroll
          loadMore={this.loadMore}
          hasMore={hasMore}
          threshold={1}
          loader={
            <div style={{ textAlign: "center" }}>
              Loading ...
            </div>
          } 
        >
          {this.renderItems()}
        </InfiniteScroll>
        {
          !hasMore ? (
            <div style={{ margin: "40px 0px" }}>
              No more magic to show. Please come back later
            </div>
          ) : null
        }
      </div>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    products: state.products
  }
}

const mapDispatchToProps = {
  getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
