import React, {
    Component
} from 'react';

export default class ShoppingItem extends Component {
    state = {
        chosenItems: []
    };

    addToCart = (item) => {
        this.props.handleAddToCart(item)
        console.log(item)
    };

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.thumbnailUrl} alt="" />
                <p>Price: {this.props.id}</p>
                <button onClick={() => this.addToCart(this.props)}>Add</button>
            </div>
        )
    }
}