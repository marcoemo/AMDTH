import React, { useState } from "react";
import { animals } from "../data/animales.mocks";

export default function Inicio() {
  const [busqueda, setBusqueda] = useState("");

  // Filtrar animales según búsqueda
  const filtrados = animals
    .filter(a =>
      a.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    .slice(0, 3); // Mostrar solo 3

  return (
    <div className="inicio">
      <h2>🐾 Bienvenido</h2>

      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar animales o productos..."
          className="buscador-input"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="animales-container">
        {filtrados.map((animals) => (
          <div key={animals.id} className="animal-card">
            <img
              src={animals.imagen}
              alt={animals.nombre}
              className="animal-imagen"
            />
            <h3>{animals.nombre}</h3>
            <p>{animals.descripcion}</p>
            <button className="btn-adoptar">Adoptar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
