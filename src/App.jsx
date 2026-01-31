import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { ThemeProvider } from "./context/ThemeContext";
import { ProductProvider } from "./context/ProductContext";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Header title="Trendz Clothing" />
        <Home />
        <Products />
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
