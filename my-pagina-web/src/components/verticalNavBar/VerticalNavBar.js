// src/VerticalNavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNavBar.css';

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/convertiraudio"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Convertir Audio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analizadordeaudio"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Analizador De Audio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cortadordeaudio"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Recorte De Audio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
