import React, {
    Component
} from 'react';
import ChosenItem from '../chosenItem/ChosenItem'

export default class ShoppingCart extends Component {
    render() {
        console.log(this.props.chosenItems)
        return (
            <div>
                MY CART:
                {this.props.chosenItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <ChosenItem {...item} key={index} />
                        </div>
                    )
                })}
            </div>
        )
    }
}