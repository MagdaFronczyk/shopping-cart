import React from "react";
import { connect } from "react-redux";
import { fetchProducts, addItemToCart } from "../../js/actions/index";

class ProductList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    addItemToCart = (product) => {
        this.props.dispatch(addItemToCart(product))
    }

    render() {

        console.log(this.props.itemsChosen)
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {products.slice(0, 10).map(product => (
                    <div>
                        <li key={product.id}>{product.title}</li>
                        <button onClick={() => this.addItemToCart(product)}>Add</button>
                    </div>
                ))}
            </ul>
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