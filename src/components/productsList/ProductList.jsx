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
        const { error, loading, products, inventory, itemsChosen } = this.props;

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
                        <Product disabled={(inventory.filter(el => el.id === product.id)[0].count - this.props.itemsChosen.filter(productChosen => productChosen.id === product.id).length) === 0 ? "true" : null}
                            {...product}
                            key={index}
                            text="Add"
                            onClick={() => this.addItemToCart(product)}
                            type="product-list__"
                            inStock={inventory.filter(el => el.id === product.id)[0].count - this.props.itemsChosen.filter(productChosen => productChosen.id === product.id).length} />
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
    error: state.products.error,
    inventory: state.products.inventory,
    itemsChosen: state.products.itemsChosen
});

ProductList.propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps)(ProductList);