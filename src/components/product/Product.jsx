import React from "react";
// iport PropTypes from 'prop-types';

const Product = ({ title, thumbnailUrl, id, onClick, text }) => (
  <div>
    <h2>{title}</h2>
    <img src={thumbnailUrl} alt="" />
    <p>Price: {id}</p>
    <button onClick={onClick}>{text}</button>
  </div>
)

export default Product;