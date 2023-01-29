import React from 'react';
// import logo from '../logo.svg';
// import { Counter } from '../features/counter/Counter';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

function App() {
  return (
    <Router className="App">
     <Header />
     <Footer />
    </Router>
  );
}

export default App;
