import React from "react";
import "./CustomerDetails.css"; // Archivo CSS

const CustomerDetails = () => {
  return (
    <div className="container">
      <div className="card">
        <button className="back-button">← Atrás</button>
        {/* Encabezado */}
        <div className="header">
          <div className="profile">
            <div className="avatar">
              RF
            </div>
            <div className="profile-info">
              <h2 className="text-xl font-bold">Robert Fox</h2>
              <p className="email">robert@gmail.com</p>
            </div>
          </div>
          <div className="info">
            <p><strong>Número de Contacto:</strong> 020-555-0124</p>
            <p><strong>Género:</strong> Masculino</p>
            <p><strong>Fecha Nac.:</strong> 1 Jan, 1985</p>
            <p><strong>Miembro desde:</strong> 3 March, 2023</p>
          </div>
          <div className="stats">
            <p><strong>Total Ordenes:</strong> 150</p>
            <p><strong>Completadas:</strong> 140</p>
            <p><strong>Canceladas:</strong> 10</p>
          </div>
        </div>

        {/* Tabla */}
        <div>
          <ul className="tabs">
            <li className="active">Todas</li>
            <li>Completas</li>
            <li>Canceladas</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Orden ID</th>
                <th>Creado</th>
                <th>Total</th>
                <th>Pago</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {/* Ejemplo Fila */}
              <tr>
                <td>#6548</td>
                <td>2 min ago</td>
                <td>$654</td>
                <td>CC</td>
                <td className="status completed">Completed</td>
              </tr>
              <tr>
                <td>#6548</td>
                <td>2 min ago</td>
                <td>$654</td>
                <td>COD</td>
                <td className="status canceled">Canceled</td>
              </tr>
              <tr>
                <td>#6548</td>
                <td>2 min ago</td>
                <td>$654</td>
                <td>CC</td>
                <td className="status pending">Pending</td>
              </tr>
            </tbody>
          </table>

          {/* Detalles del pedido */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Detalles de la Orden</h3>
            <table>
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>QTY</th>
                  <th>Desc.</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {/* Ejemplo de producto */}
                <tr>
                  <td>#6548</td>
                  <td>Apple iPhone 13</td>
                  <td>$999.29</td>
                  <td>x1</td>
                  <td>5%</td>
                  <td>$949.32</td>
                </tr>
              </tbody>
            </table>

            <div className="summary">
              <p>Subtotal: $2,847.96</p>
              <p>Shipping: $5.50</p>
              <p>Discount: -$150.32</p>
              <p className="total">Total: $2,847.32</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
