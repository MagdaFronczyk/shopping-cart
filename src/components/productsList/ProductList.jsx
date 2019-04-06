import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../js/actions/index";
import Product from "../product/Product";

class ProductList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
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
                    <Product {...product} key={index} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error,
    itemsChosen: state.products.itemsChosen
});

export default connect(mapStateToProps)(ProductList);