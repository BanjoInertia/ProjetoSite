import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ShoppingCart } from "../components/PageHeader/ShoppingCart/ShoppingCart";

const initialContext = {
  openCart: () => {},
};

export const ShoppingCartContext = createContext(initialContext);

export const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCartItems((currItems) => {
      const existingIndex = currItems.findIndex((item) => item.id === id);
      if (existingIndex === -1) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        const updatedItems = [...currItems];
        if (updatedItems[existingIndex].quantity < 1) {
          updatedItems[existingIndex].quantity += 1;
        }
        return updatedItems;
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
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
