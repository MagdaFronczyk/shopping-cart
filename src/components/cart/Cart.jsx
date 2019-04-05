import React from "react";
import { connect } from "react-redux";
import Product from "../product/Product";

class Cart extends React.Component {

  render() {
    const { itemsChosen } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        {itemsChosen.map((item, index) => {
          return (
            <Product {...item} key={index} />
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