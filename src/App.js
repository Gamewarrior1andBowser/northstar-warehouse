import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <>
      <main>
        <div className='container flex'>
          <Routes>
            <Route exact path='/' element={<Home />}/>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
