import Header from "../components/Header";
import index from "../css/index.css";
import ProductSection from "../components/ProductSection";

function Home() {
  return (
    <>
    <Header/>
     
      <section className = "hero-banner">
         <h2>New Home for renovation</h2>
        <p>Shop for your next adventure</p>

      </section>
      
      <ProductSection />
    </>
  );
}

export default Home;