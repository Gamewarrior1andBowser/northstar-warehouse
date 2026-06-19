import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ProductSection from "./components/ProductSection";



// function App() {
//   return (
//     <>
//       <main>
//         <div className='container flex'>
//           <Routes>
//             <Route exact path='/northstar-warehouse' element={<Home />}/>

//             <Route path="/product/:id" element={<Product />} />

//             <Route path='*' element={<Error404 />}/>

//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;






function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Routes>
                   <Route exact path='/northstar-warehouse' element={<Home />}/>
           <Route path="/product/:id" element={<Product />} />

            <Route path='*' element={<Error404 />}/>

           <Route path="/cart" element={<Cart />} />
      <Route
        path="/"
        element={
          <ProductSection setSelectedProduct={setSelectedProduct} />
        }
      />

      <Route
        path="/product"
        element={<Product product={selectedProduct} />}
      />
    </Routes>
  );
}

export default App;