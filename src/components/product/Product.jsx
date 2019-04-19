import React from "react";
import PropTypes from 'prop-types';

const Product = ({ name, quantity, price, onClick, text, numberOfProducts, img, description, type, inStock, disabled }) => (
  <div className={`${type}product-container`}>
    <h2>{name}</h2>
    <img src={img} alt="" className={`${type}img`} />
    <p>{description}</p>
    <p>Price: {price}</p>
    {/* <p>In stock: {inStock}</p> */}
    <p>{quantity} {numberOfProducts}</p>
    <button disabled={disabled} onClick={onClick} className={`${type}button`}>{text}</button>
  </div>
)

Product.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
  text: PropTypes.string,
}

export default Product;