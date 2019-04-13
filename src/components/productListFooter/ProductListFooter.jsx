import React from 'react';
import LinkButton from '../linkButton/LinkButton';
import { connect } from "react-redux";
import './ProductListFooter.css';

const ProductListFooter = ({ itemsChosen }) => (
    <div className="product-list-footer">
        <p className="product-list-footer__quantity">Number of items in cart:{itemsChosen.length}</p>
        <LinkButton path="/cart" label="Go to cart" type="product-list-footer__" />
    </div>
)

const mapStateToProps = state => ({
    itemsChosen: state.products.itemsChosen
});

export default connect(mapStateToProps)(ProductListFooter);
