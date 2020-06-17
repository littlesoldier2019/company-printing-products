import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogContextProvider from './context/blogcontext';
import ContactContextProvider from './context/contactcontext';

ReactDOM.render(
  <React.StrictMode>
    <BlogContextProvider>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </BlogContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

