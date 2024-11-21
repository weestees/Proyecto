import React from 'react';
import './Info.css';

function ProductDetail() {
  return (
    <div className="product-detail-container">
      <div className="header">
        <h1>GAS 1</h1>
        <div className="tabs">
          <button className="tab active">General</button>
          <button className="tab">Compras</button>
          <button className="tab">Ajustes</button>
          <button className="tab">Historia</button>
        </div>
      </div>

      <div className="content">
        {/* Detalles Primarios */}
        <div className="primary-details">
          <h2>Detalles Primarios</h2>
          <div className="details-row">
            <p>Nombre del Producto:</p> <span>Gas1</span>
          </div>
          <div className="details-row">
            <p>Producto ID:</p> <span>456567</span>
          </div>
          <div className="details-row">
            <p>Tipo:</p> <span>GLP en cilindros DOMÉSTICO</span>
          </div>
          <div className="details-row">
            <p>Fecha:</p> <span>13/4/23</span>
          </div>
          <div className="details-row">
            <p>Valor:</p> <span>$3.50</span>
          </div>
        </div>

        {/* Detalles del Distribuidor */}
        <div className="distributor-details">
          <h2>Detalles del Distribuidor</h2>
          <div className="details-row">
            <p>Nombre del Proveedor:</p> <span>CONGAS</span>
          </div>
          <div className="details-row">
            <p>Número:</p> <span>98789 86757</span>
          </div>
        </div>

        {/* Imagen del Producto */}
        <div className="product-image">
          <img
            src="https://via.placeholder.com/100x150.png?text=Gas+Cylinder"
            alt="Gas Cylinder"
          />
          <div className="stock-info">
            <div className="details-row">
              <p>Apertura:</p> <span>40</span>
            </div>
            <div className="details-row">
              <p>Stock restante:</p> <span>34</span>
            </div>
            <div className="details-row">
              <p>En camino:</p> <span>15</span>
            </div>
            <div className="details-row">
              <p>Valor:</p> <span>$3.5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de Stock */}
      <div className="stock-table">
        <h2>Stock</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Stock en mano</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gas1</td>
              <td>15</td>
            </tr>
            <tr>
              <td>gas2</td>
              <td>19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetail;
