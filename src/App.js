import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import './assets/styles/App.scss';
import Header from './components/share-compoments/Header';
import Footer from './components/share-compoments/Footer';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Blog from './components/blog/Blog';
import BlogDetails from './components/blog/BlogDetails';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0, transitionDuration: 1000 }}
          atLeave={{ opacity: 0, transitionDuration: 1000 }}
          atActive={{ opacity: 1, transitionDuration: 1000 }}
          className="switch-wrapper"
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/:id' component={BlogDetails} />
          <Route exact path='/contact' component={Contact} />
        </AnimatedSwitch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

