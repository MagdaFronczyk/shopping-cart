import React, {
    Component
} from 'react';

export default class ChosenItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.thumbnailUrl} alt="" />
                <p>Price: {this.props.id}</p>
            </div>
        )
    }
}