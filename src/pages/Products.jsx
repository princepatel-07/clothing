import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import "../styles/products.css";

const Products = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <div className="product-grid">
      {loading
        ? [...Array(6)].map((_, i) => <ProductSkeleton key={i} />)
        : products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
};

export default Products;
