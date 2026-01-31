import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
