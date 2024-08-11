import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VerticalNavBar from './components/verticalNavBar/VerticalNavBar';
import Home from './components/Home/Home';
import ConvertirAudio from './components/ConvertirAudio/ConvertirAudio';
import AnalizadorDeAudio from './components/AnalizadorDeAudio/AnalizadorDeAudio';
import CortadorDeAudio from './components/CortadorDeAudio/CortadorDeAudio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
        <div className="navbar-container">
          <VerticalNavBar />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/convertiraudio" element={<ConvertirAudio />} />
              <Route path="/analizadordeaudio" element={<AnalizadorDeAudio/>} />
            <Route path="/cortadordeaudio" element={<CortadorDeAudio />} /> 
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
