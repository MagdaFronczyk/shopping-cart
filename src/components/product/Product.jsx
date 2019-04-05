import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart, addItemToCart } from "../../js/actions/index";

class Product extends React.Component {
  addItemToCart = (product) => {
    this.props.dispatch(addItemToCart(product))
  }

  removeFromCart = (item) => {
    this.props.dispatch(removeItemFromCart(item))
    // console.log("Dzialam", item, this.props.itemsChosen.indexOf(item))
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={() => this.addItemToCart(this.props)}>Add</button>
        <button onClick={() => this.removeFromCart(this.props)}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  itemsChosen: state.products.itemsChosen
});

export default connect(mapStateToProps)(Product);