import React from 'react';
import LinkButton from '../linkButton/LinkButton';
import { connect } from "react-redux";
import './CartFooter.css';

const CartFooter = ({ itemsChosen }) => (
    <footer className="cart__footer">
        <p className="cart_footer__quantity">Total:{itemsChosen.reduce((sum, curr) => sum + curr.price, 0).toFixed(2)}</p>
        <LinkButton path="/" label="Go back" type="cart_footer__" />
    </footer>
)

const mapStateToProps = state => ({
    itemsChosen: state.products.itemsChosen
});

export default connect(mapStateToProps)(CartFooter);