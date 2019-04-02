import React, {
    Component
} from 'react';

export default class ChosenItem extends Component {

    removeFromCart = (item) => {
        this.props.handleRemoveFromCart(item);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.thumbnailUrl} alt="" />
                <p>Price: {this.props.id}</p>
                <button onClick={() => this.removeFromCart(this.props)}>Remove</button>
            </div>
        )
    }
}