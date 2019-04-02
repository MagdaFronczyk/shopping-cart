import React, {
  Component
} from 'react';
import './App.css';
import ShoppingItem from '../shoppingItem/ShoppingItem';
import ShoppingCart from '../shoppingCart/ShoppingCart'

class App extends Component {
  state = {
    data: [],
    chosenItems: []
  };

  addToCart = (item) => {
    this.setState({
      chosenItems: [...this.state.chosenItems, item]
    })
  };

  removeFromCart = (item) => {
    this.setState({
      chosenItems: this.state.chosenItems.filter((itemInCart, index, array) => array.indexOf(itemInCart) !== array.indexOf(item))
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="shopping-items-container">
          <h2>SHOPPING ITEMS:</h2>
          {this.state.data.slice(0, 10).map((item, index) => {
            return < ShoppingItem {...item} key={index} handleAddToCart={this.addToCart} />
          })}
        </div>
        <ShoppingCart {...this.state} handleRemoveFromCart={this.removeFromCart} />
      </div>
    );
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => this.setState({ data: [...data] }))
  }

}

export default App;
