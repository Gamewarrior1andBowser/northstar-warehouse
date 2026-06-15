import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Error404 from './pages/Error404'

function App() {
  return (
    <>
      <main>
        <div className='container flex'>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
