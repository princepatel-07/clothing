import { motion } from "framer-motion";

const ProductCard = ({ product }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="product-card"
  >
    <img src={product.image} />
    <h6>{product.title.slice(0, 40)}</h6>
    <p className="price">₹ {(product.price * 83).toFixed(0)}</p>
    <button>Add to Cart</button>
  </motion.div>
);

export default ProductCard;
