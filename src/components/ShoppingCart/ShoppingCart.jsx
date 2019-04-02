import React, {
    Component
} from 'react';
import ShoppingItem from '../shoppingItem/ShoppingItem';

export default class ShoppingCart extends Component {
    removeFromCart = (item) => {
        this.props.handleRemoveFromCart(item);
    }

    render() {
        return (
            <div>
                <h2>MY CART:</h2>
                {this.props.chosenItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <img src={item.thumbnailUrl} alt="" />
                            <p>Price: {item.id}</p>
                            <button onClick={() => this.removeFromCart(item)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}