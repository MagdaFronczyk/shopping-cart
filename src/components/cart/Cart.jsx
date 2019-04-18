import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../product/Product";
import { removeItemFromCart } from "../../actions/index";
import PropTypes from 'prop-types';
import CartFooter from '../cartFooter/CartFooter';
import './Cart.css'

class Cart extends Component {

  removeFromCart = (item) => {
    this.props.dispatch(removeItemFromCart(item));
  }

  render() {
    const { itemsChosen, inventory } = this.props;
    return (
      <div className="cart">
        <div className="cart_container">
          {itemsChosen.filter((el, index) => itemsChosen.indexOf(el) === index).map((item, index) => {
            return (
              <Product {...item}
                inStock={inventory.filter(el => el.id === item.id)[0].count - this.props.itemsChosen.filter(productChosen => productChosen.id === item.id).length}
                key={index} text="Remove"
                onClick={() => this.removeFromCart(item)}
                type="cart__"
                quantity="Quantity"
                numberOfProducts={this.props.itemsChosen.filter(productChosen => productChosen.id === item.id).length} />
            )
          })}
        </div>
        <CartFooter />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsChosen: state.products.itemsChosen,
  inventory: state.products.inventory
});

Cart.propTypes = {
  itemsChosen: PropTypes.array
}

export default connect(mapStateToProps)(Cart);