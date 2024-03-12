import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/PageHeader/ShoppingCart/ShoppingCart";
import PropTypes from "prop-types";

const initialContext = {
  openCart: () => {},
  closeCart: () => {},
  getItemQuantity: (id) => 0,
  increaseCartQuantity: (id) => {},
  removeFromCart: (id) => {},
  cartQuantity: () => 0,
  cartItems: [],
};

export const ShoppingCartContext = createContext(initialContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([]);


  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (existingItem === undefined) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  
  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity, removeFromCart, openCart, closeCart, cartItems, cartQuantity }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
