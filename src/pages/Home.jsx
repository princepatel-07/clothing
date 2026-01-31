import CategoryRing from "../components/CategoryRing";
import "../styles/home.css";

const Home = () => (
  <>
    <div className="hero">
      <img src="https://picsum.photos/1400/450" />
    </div>

    <div className="category-container">
      <CategoryRing title="Men" image="https://picsum.photos/200" />
      <CategoryRing title="Women" image="https://picsum.photos/201" />
      <CategoryRing title="Kids" image="https://picsum.photos/202" />
    </div>
  </>
);

export default Home;
