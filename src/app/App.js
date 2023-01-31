import React from 'react';
// import logo from '../logo.svg';
// import { Counter } from '../features/counter/Counter';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import Body from '../features/body/Body';

function App() {
  return (
    <Router className="App">
     <Header />
     <Body />
     <Footer />
    </Router>
  );
}

export default App;
