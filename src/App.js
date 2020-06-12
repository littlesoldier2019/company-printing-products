import React from 'react';
import './assets/styles/App.scss';
import Header from './components/share-compoments/Header';
import Footer from './components/share-compoments/Footer';
import Home from './components/home/Home';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
