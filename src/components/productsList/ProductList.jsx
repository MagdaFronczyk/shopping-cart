import React from "react";
import { connect } from "react-redux";
// import { fetchProducts } from "../../actions/index";
import Product from "../product/Product";
import { addItemToCart } from "../../actions/index";
import PropTypes from 'prop-types';
import ProductListFooter from '../productListFooter/ProductListFooter'
import './ProductList.css';

class ProductList extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProducts());
    // }

    addItemToCart = (product) => {
        this.props.dispatch(addItemToCart(product));
    }

    render() {
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div className="product-list-container">
                    {products.map((product, index) => (
                        <Product {...product} key={index} text="Add" onClick={() => this.addItemToCart(product)} type="product-list__" />
                    ))}
                </div>
                <ProductListFooter />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

ProductList.propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps)(ProductList);