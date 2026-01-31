import { motion } from "framer-motion";
import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/header.css";

const Header = ({ title }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="navbar"
    >
      <h3 className="logo">{title}</h3>

      <div className="nav-links">
        <span className="red">Home</span>
        <span className="blue">Shop</span>
        <span className="green">Contact</span>

        <FaShoppingCart />
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Header;
