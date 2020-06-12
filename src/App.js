import React from 'react';
import './assets/styles/App.scss';
import Header from './components/share-compoments/Header';
import Footer from './components/share-compoments/Footer';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> 
      <Product />  */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
