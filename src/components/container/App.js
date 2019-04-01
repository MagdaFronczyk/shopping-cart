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

  render() {
    console.log(this.state.chosenItems);
    return (
      <div className="App" >
        {this.state.data.slice(0, 10).map((item, index) => {
          return < ShoppingItem {...item} key={index} handleAddToCart={this.addToCart} />
        })}
        <ShoppingCart {...this.state} />
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