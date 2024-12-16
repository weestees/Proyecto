import React from 'react';

const BarraBusqueda = () => {
  return (
    <div className="barra-busqueda">
      <input type="text" placeholder="Buscar" className="input-buscar" />
      <button className="boton-filtrar">Filtrar ▼</button>
    </div>
  );
};

export default BarraBusqueda;
