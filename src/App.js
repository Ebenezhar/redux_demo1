import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/cart'element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
