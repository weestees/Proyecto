import React from 'react';

const PaginaBarra = () => {
  return (
    <div className="seccion-paginacion">
      <div className="mostrar-registros">
        <label htmlFor="registros">Showing</label>
        <select id="registros" className="select-registros">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <span>of 50</span>
      </div>
      <div className="paginacion">
        <button className="boton-paginacion">&laquo;</button>
        <button className="boton-paginacion activo">1</button>
        <button className="boton-paginacion">2</button>
        <button className="boton-paginacion">3</button>
        <button className="boton-paginacion">4</button>
        <button className="boton-paginacion">5</button>
        <button className="boton-paginacion">&raquo;</button>
      </div>
    </div>
  );
};

export default PaginaBarra;
