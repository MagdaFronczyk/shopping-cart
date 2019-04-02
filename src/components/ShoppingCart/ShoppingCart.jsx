import React, {
    Component
} from 'react';
import ChosenItem from '../chosenItem/ChosenItem'

export default class ShoppingCart extends Component {

    render() {
        return (
            <div>
                <h2>MY CART:</h2>
                {this.props.chosenItems.map((item, index) => {
                    return (
                        <div key={index} className="shopping-cart-container">
                            <ChosenItem {...item} key={index} handleRemoveFromCart={this.props.handleRemoveFromCart} />
                        </div>
                    )
                })}
            </div>
        )
    }
}