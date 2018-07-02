import React, { Component } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import List from "../components/List";
import Cart from "../components/Cart";

class App extends Component {
  state = {
    keyword: "",
    pokemons: this.props.pokemons,
    selectedType: this.props.types[0],
    cartItems: [],
    isCartOpen: false
  };

  onChangeFilterInput = event => {
    const keyword = event.target.value.toLowerCase();

    this.setState({
      keyword
    });
  };

  toggleCart = (event, shouldOpen) => {
    this.setState({
      isCartOpen: shouldOpen
    });
  };

  addItemToCart = (event, item) => {
    const cartItems = this.state.cartItems.slice();

    const doesItemExistInCart =
      cartItems.filter(cartItem => item.id === cartItem.id).length > 0;

    if (!doesItemExistInCart) {
      cartItems.push(item);

      this.setState({
        cartItems
      });
    }
  };

  removeItemFromCart = (event, item) => {
    let cartItems = this.state.cartItems.slice();

    cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);

    this.setState({
      cartItems
    });
  };

  selectType = (event, selectedType) => {
    this.setState({
      selectedType
    });
  };

  render() {
    const { isCartOpen, cartItems, selectedType, keyword } = this.state;
    const { pokemons, types } = this.props;

    const filteredPokemons = pokemons.filter(pokemon => {
      const name = pokemon.name.toLowerCase();
      const type = pokemon.type.toLowerCase();

      return name.includes(keyword) && type.includes(selectedType.value);
    });

    return (
      <div className="container">
        <Header toggleCart={this.toggleCart} cartItems={cartItems} />
        <div className="content">
          <Sidebar
            keyword={keyword}
            onFilterChange={this.onChangeFilterInput}
            types={types}
            selectedType={selectedType}
            selectType={this.selectType}
          />

          <List
            pokemons={filteredPokemons}
            cartItems={cartItems}
            addItemToCart={this.addItemToCart}
          />
        </div>
        <Cart
          cartItems={cartItems}
          isCartOpen={isCartOpen}
          toggleCart={this.toggleCart}
          removeItemFromCart={this.removeItemFromCart}
        />
      </div>
    );
  }
}

export default App;
