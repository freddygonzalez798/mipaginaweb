// src/components/Home/Home.js
import React from 'react';
import './Home.css'; // Importa el archivo CSS aquí
import inicioImg from '../../img/inicio.gif'; // Importa la imagen directamente

const Home = () => {
  return (
    <div className="home-container">
      <div id="inicio">
        <h1>Bienvenido a Audio Analyzer</h1>
        <div className="image-container">
          <img src={inicioImg} style={{ width: '200px' }} alt="Audio Analyzer" />
        </div>
        <p>Utiliza nuestras herramientas para analizar tus archivos de audio.</p>
        <p>Navega a través del menú para comenzar.</p>
      </div>
    </div>
  );
};

export default Home;
