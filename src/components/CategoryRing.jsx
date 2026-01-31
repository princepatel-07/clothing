import { motion } from "framer-motion";

const CategoryRing = ({ image, title }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    className="category-ring"
  >
    <img src={image} />
    <p>{title}</p>
  </motion.div>
);

export default CategoryRing;
