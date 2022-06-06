import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';


function App() {
  return (
<CartContextProvider>
<BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailConteiner />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
</CartContextProvider>

  );
}

export default App;



