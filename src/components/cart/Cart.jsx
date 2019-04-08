import React from "react";
import { connect } from "react-redux";
import Product from "../product/Product";
import { removeItemFromCart, addPrices } from "../../js/actions/index";

class Cart extends React.Component {

  removeFromCart = (item) => {
    this.props.dispatch(removeItemFromCart(item));
  }

  render() {
    const { itemsChosen } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        {itemsChosen.map((item, index) => {
          return (
            <Product {...item} key={index} text="Remove" onClick={() => this.removeFromCart(item)} />
          )
        })}
        <div>
          <p>Sum:{this.props.sum}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  itemsChosen: state.products.itemsChosen,
  sum: state.products.sum
});

export default connect(mapStateToProps)(Cart);