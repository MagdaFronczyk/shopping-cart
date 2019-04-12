import React from "react";
import { connect } from "react-redux";
import Product from "../product/Product";
import { removeItemFromCart, detractPrice } from "../../actions/index";
import PropTypes from 'prop-types';

class Cart extends React.Component {

  removeFromCart = (item) => {
    this.props.dispatch(removeItemFromCart(item));
  }

  render() {
    const { itemsChosen } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        {itemsChosen.filter((el, index) => itemsChosen.indexOf(el) === index).map((item, index) => {
          return (
            <Product {...item} key={index} text="Remove" onClick={() => this.removeFromCart(item)} quantity="Quantity" numberOfProducts={this.props.itemsChosen.filter(productChosen => productChosen.id === item.id).length} />
          )
        })}
        <div>
          <p>Sum:{this.props.itemsChosen.reduce((sum, curr) => sum + curr.price, 0)}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsChosen: state.products.itemsChosen,
  sum: state.products.sum
});

Cart.propTypes = {
  itemsChosen: PropTypes.array,
  sum: PropTypes.number
}

export default connect(mapStateToProps)(Cart);