import React from 'react';
import LinkButton from '../linkButton/LinkButton';
import { connect } from "react-redux";
import './CartFooter.css';

const CartFooter = ({ itemsChosen }) => (
    <div className="cart-footer">
        <p className="cart-footer__quantity">Total:{itemsChosen.reduce((sum, curr) => sum + curr.price, 0)}</p>
        <LinkButton path="/" label="Go back" type="cart-footer__" />
    </div>
)

const mapStateToProps = state => ({
    itemsChosen: state.products.itemsChosen
});

export default connect(mapStateToProps)(CartFooter);