import React from "react";

class Header extends React.Component {
  render() {
    const { toggleCart, cartItems } = this.props;

    return (
      <header className="header">
        <div className="logo">
          <img src="img/pokeball-icon.png" alt="pokeball" />
          <span>Pok'em!</span>
        </div>
        <div className="cartBtn" onClick={e => toggleCart(e, true)}>
          <div className="cartItemCount">{cartItems.length}</div>
          <img src="img/shopping-bag.png" alt="shoppingbag" />
        </div>
      </header>
    );
  }
}

export default Header;
