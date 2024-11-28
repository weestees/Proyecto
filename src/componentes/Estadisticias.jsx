import React from 'react';

const Estadisticas = () => {
  return (
    <div className="estadisticas-inventario">
        <div className="estadistica-item">
            <h3 className="titulo-azul">Tipos</h3>
            <p className="valor">14</p>
            <p className="descripcion">Últimos 7 días</p>
        </div>
        <div className="divider"></div>
        <div className="estadistica-item">
            <h3 className="titulo-naranja">Total de Productos</h3>
            <div className="contenido-dos">
            <div>
                <p className="valor">868</p>
                <p className="descripcion">Últimos 7 días</p>
            </div>
            <div>
                <p className="valor">$100</p>
                <p className="descripcion">Ganancia</p>
            </div>
            </div>
        </div>

        <div className="divider"></div>
        <div className="estadistica-item">
            <h3 className="titulo-morado">Más Vendido</h3>
            <div className="contenido-dos">
            <div>
                <p className="valor">5</p>
                <p className="descripcion">Últimos 7 días</p>
            </div>
            <div>
                <p className="valor">$100</p>
                <p className="descripcion">Costos</p>
            </div>
            </div>
        </div>

        <div className="divider"></div>
        <div className="estadistica-item">
            <h3 className="titulo-rojo">Stocks</h3>
            <div className="contenido-dos">
            <div>
                <p className="valor">12</p>
                <p className="descripcion">Ordenes</p>
            </div>
            <div>
                <p className="valor">2</p>
                <p className="descripcion">No disp. stock</p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Estadisticas;
