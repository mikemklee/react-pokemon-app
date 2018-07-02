import React from "react";

class Cart extends React.Component {
  render() {
    const {
      isCartOpen,
      toggleCart,
      cartItems,
      removeItemFromCart
    } = this.props;

    return (
      <div className={`cart ${isCartOpen === true ? "cart--active" : ""}`}>
        <div className="cartHeading">My Bag</div>
        <div
          className="cartCloseBtn"
          onClick={event => toggleCart(event, false)}
        >
          Close
        </div>

        {cartItems.length > 0 && (
          <div className="cartList">
            {cartItems.map(cartItem => (
              <div className="cartListItem" key={`c-${cartItem.name}`}>
                <div
                  className="cartListItem__removeBtn"
                  onClick={event => removeItemFromCart(event, cartItem)}
                >
                  <img src="img/error.svg" alt="" />
                </div>
                <img
                  className="cartListItem__image"
                  src={cartItem.image}
                  alt={cartItem.name}
                  title={cartItem.name}
                />
              </div>
            ))}
          </div>
        )}

        {cartItems.length === 0 && (
          <div className="cartEmpty">Your bag is empty.</div>
        )}
      </div>
    );
  }
}

export default Cart;
