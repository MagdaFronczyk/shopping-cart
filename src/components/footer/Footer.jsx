import React from 'react';
import LinkButton from '../linkButton/LinkButton';
import { connect } from "react-redux";

const Footer = ({ itemsChosen }) => (
    <div>
        <p>Number of items in cart:{itemsChosen.length}</p>
        <LinkButton path="/cart" label="cart" />
    </div>
)

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error,
    itemsChosen: state.products.itemsChosen
});

export default connect(mapStateToProps)(Footer);
