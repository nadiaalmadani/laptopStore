import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Product from './component/Product';
import Contact from './component/Contact';
import {  Route , Routes } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        
          <Route  path="/" element={<Home />} />
          <Route  path="/products" element={<Product />} />
          <Route  path="/products/:id" element={<ProductDetail />} />
          <Route  path="/cart" element={<Cart />} />
          <Route  path="/checkout" element={<Checkout />} />
          <Route  path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  );
}

export default App;
