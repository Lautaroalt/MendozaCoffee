import './App.css';
import Inicio from './components/Inicio';
import Navbar from './components/NavBar'; 
import React from 'react';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <div>
      <Navbar />
      <SmoothScroll/>
      <Inicio />
    </div>
  );
}

export default App;
