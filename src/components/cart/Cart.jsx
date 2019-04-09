import React from "react";
import { connect } from "react-redux";
import Product from "../product/Product";
import { removeItemFromCart, detractPrice } from "../../js/actions/index";

class Cart extends React.Component {

  removeFromCart = (item) => {
    this.props.dispatch(removeItemFromCart(item));
  }

  detractPrice = (item) => {
    this.props.dispatch(detractPrice(item));
  }

  render() {
    const { itemsChosen } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        {itemsChosen.map((item, index) => {
          return (
            <Product {...item} key={index} text="Remove" onClick={() => { this.removeFromCart(item); this.detractPrice(item) }} />
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
  itemsChosen: state.products.itemsChosen,
  sum: state.products.sum
});

export default connect(mapStateToProps)(Cart);