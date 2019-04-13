import React from "react";
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ name, quantity, price, onClick, text, numberOfProducts, img, description, type }) => (
  <div className="product-container">
    <h2>{name}</h2>
    <img src={img} alt="" />
    <p>{description}</p>
    <p>Price: {price}</p>
    <p>{quantity} {numberOfProducts}</p>
    <button onClick={onClick} className={`product-${type}-button`}>{text}</button>
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