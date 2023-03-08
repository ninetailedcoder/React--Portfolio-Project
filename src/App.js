import './App.css';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom";
import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import merchPage from './pages/merchPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='contact' element={<ContactPage/>} />
        <Route path='merch' element={<merchPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
