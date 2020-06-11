import React from 'react';
import './assets/styles/App.scss';
import Header from './components/share-compoments/Header';
import Footer from './components/share-compoments/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
