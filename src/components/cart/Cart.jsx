import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../js/actions/index";

class Cart extends React.Component {
  removeFromCart = (item) => {
    this.props.dispatch(removeItemFromCart(item))
  }

  render() {
    const { itemsChosen } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        {itemsChosen.map(item => {
          return (
            <ul>
              <li>{item.title}</li>
              <button onClick={() => this.removeFromCart(item)}>Remove</button>
            </ul>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsChosen: state.products.itemsChosen
});

export default connect(mapStateToProps)(Cart);