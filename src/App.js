import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Product} from './components/Catalogue';
import {Cart} from './components/Cart';
import {Checkout} from './components/Checkout';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalogue" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
