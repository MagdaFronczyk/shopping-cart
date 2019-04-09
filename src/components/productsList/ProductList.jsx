import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../js/actions/index";
import Product from "../product/Product";
import { addItemToCart, addPrices } from "../../js/actions/index";
import PropTypes from 'prop-types';


class ProductList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    addItemToCart = (product) => {
        this.props.dispatch(addItemToCart(product));
    }

    addPrices = (product) => {
        this.props.dispatch(addPrices(product))
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
                {products.slice(0, 10).map((product, index) => (
                    <Product {...product} key={index} text="Add" onClick={() => { this.addItemToCart(product); this.addPrices(product) }} />
                ))}
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