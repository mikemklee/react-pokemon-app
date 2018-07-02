import React from "react";

class ListItem extends React.Component {
  render() {
    const { pokemon, addItemToCart, cartItems } = this.props;

    const doesItemExistInCart =
      cartItems.filter(cartItem => pokemon.id === cartItem.id).length > 0;

    return (
      <div
        className={`listItem ${doesItemExistInCart ? "listItem--added" : ""}`}
      >
        <img
          className="listItem__image"
          src={pokemon.image}
          alt={pokemon.name}
          title={pokemon.name}
        />
        <h3 className="listItem__name">{pokemon.name}</h3>
        <div className="listItem__price">
          <div className="listItem__price--text">$17.49</div>
        </div>
        <div
          className="listItem__addButton"
          onClick={event => addItemToCart(event, pokemon)}
        >{`${doesItemExistInCart ? "Added" : "Add to Bag"}`}</div>
      </div>
    );
  }
}

export default ListItem;
