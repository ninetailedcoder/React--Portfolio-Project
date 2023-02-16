import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router} from "react-router-dom";
import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation/>
        <div>

        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
