import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Footer from './components/Footer';

function App() {
  let title = 'This is the new TCRI react site!'
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
