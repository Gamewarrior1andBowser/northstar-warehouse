import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from  '../src/Components/Footer';

function App() {
  return (
    <>
      <main>
        <div className='container flex'>
          <Routes>
            <Route exact path='/northstar-warehouse' element={<Home />}/>

            <Route path="/product/:id" element={<Product />} />

            <Route path='*' element={<Error404 />}/>

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </main>
      <Footer />
      
    </>
  );
}

export default App;
