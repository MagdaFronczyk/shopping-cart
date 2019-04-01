import React, {
    Component
} from 'react';

export default class ShoppingCart extends Component {
    render() {
        console.log(this.props.chosenItems)
        return (
            <div>
                MY CART:
                {this.props.chosenItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <img src={item.thumbnailUrl} alt="" />
                            <p>Price: {item.id}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}