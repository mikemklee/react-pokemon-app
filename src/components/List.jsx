import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const { pokemons, addItemToCart, cartItems } = this.props;
    let pokemonList;
    if (pokemons.length > 0) {
      pokemonList = (
        <div className="list">
          {pokemons.map(pokemon => (
            <ListItem
              key={pokemon.name}
              pokemon={pokemon}
              addItemToCart={addItemToCart}
              cartItems={cartItems}
            />
          ))}
        </div>
      );
    } else {
      pokemonList = (
        <div className="list--empty">
          <img src="img/razz-berry.svg" alt="razzberry" />
          <p>The pokemon you are looking for is currently unavailable.</p>
        </div>
      );
    }
    return pokemonList;
  }
}

export default List;
