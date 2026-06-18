import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Review from './pages/Review'
import './css/review.css';

function App() {
  return (
    <>
      <main>
        <div className='container flex'>
          <Routes>
            <Route exact path='/northstar-warehouse' element={<Home />}/>
            <Route path='*' element={<Error404 />}/>
            <Route exact path='/northstar-warehouse/Review' element={<Review />}/>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
