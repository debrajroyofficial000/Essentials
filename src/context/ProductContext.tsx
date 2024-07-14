import { createContext, ReactElement, useContext, useState } from "react";

import { IProduct } from "../utils/lib";

export interface IFetchedProduct {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

export const ProductContext = createContext<IFetchedProduct | undefined>(
  undefined
);

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error("Please wrap the Product Context through the app");

  return context;
};

const ProductContextProvider = ({ children }: { children: ReactElement }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
