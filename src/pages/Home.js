import Header from "../Components/Header";
import index from "../css/index.css";
import ProductSection from "../Components/ProductSection";
import Footer from  '../Components/Footer';


function Home() {
  return (
    <>
    <Header/>
     
      <section className = "hero-banner">
        <p>Shop for your next adventure</p>
        <button className="Product-btn"   a href= "#products">View Products</button>
      </section>

      <ProductSection />
      <Footer />
    </>
  );
}

export default Home;