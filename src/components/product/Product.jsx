import React from "react";
import PropTypes from 'prop-types';

const Product = ({ title, quantity, price, onClick, text, numberOfProducts }) => (
  <div>
    <h2>{title}</h2>
    <p>Price: {price}</p>
    <p>{quantity} {numberOfProducts}</p>
    <button onClick={onClick}>{text}</button>
  </div>
)

Product.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Product;