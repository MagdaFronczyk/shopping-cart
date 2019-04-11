import React from "react";
import PropTypes from 'prop-types';

const Product = ({ title, thumbnailUrl, id, onClick, text, numberOfProducts }) => (
  <div>
    <h2>{title}</h2>
    <img src={thumbnailUrl} alt="" />
    <p>Price: {id}</p>
    <p>Number: {numberOfProducts}</p>
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