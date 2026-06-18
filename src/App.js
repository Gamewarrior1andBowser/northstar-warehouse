import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Product from './pages/Product';
import Cart from './pages/Cart';

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


import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductSection from "./components/ProductSection";
import Product from "./pages/Product";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Routes>
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