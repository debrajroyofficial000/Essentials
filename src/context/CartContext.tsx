import { createContext, ReactElement, useContext, useState } from "react";
import { IProduct } from "../utils/lib";

export interface ICart {
  cartProducts: IProduct[];
  setCartProducts: (cartProducts: IProduct[]) => void;
}

export const CartContext = createContext<ICart | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};

const CartContextProvider = ({ children }: { children: ReactElement }) => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
