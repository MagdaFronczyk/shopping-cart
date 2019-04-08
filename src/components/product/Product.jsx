import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.thumbnailUrl} alt="" />
        <p>{this.props.id}</p>
        <button onClick={this.props.onClick}>{this.props.text}</button>
      </div>
    )
  }
}

export default Product;