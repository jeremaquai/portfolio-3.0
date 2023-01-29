import React from 'react';
// import logo from '../logo.svg';
// import { Counter } from '../features/counter/Counter';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../features/header/Header';

function App() {
  return (
    <Router className="App">
     <Header />
    </Router>
  );
}

export default App;
