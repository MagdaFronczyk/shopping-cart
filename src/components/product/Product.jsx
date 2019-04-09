import React from "react";


const Product = ({ title, thumbnailUrl, id, onClick, text }) => (
  <div>
    <h2>{title}</h2>
    <img src={thumbnailUrl} alt="" />
    <p>{id}</p>
    <button onClick={onClick}>{text}</button>
  </div>
)

export default Product;