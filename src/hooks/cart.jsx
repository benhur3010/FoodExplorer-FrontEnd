import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

function CartProvider ({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={
      [cart, setCart]
    }>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext);

  return context
}

export {
  CartProvider,
  useCart
}