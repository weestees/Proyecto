import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const TablaPedidos = () => {
  const [pedidos, setPedidos] = React.useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/pedidos')
      .then(response => {
        console.log('Datos obtenidos:', response.data);
        setPedidos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <table className="tabla-pedidos">
      <thead>
        <tr>
          <th>ORDER ID</th>
          <th>CREADO</th>
          <th>CLIENTE</th>
          <th>TOTAL</th>
          <th>GANANCIA</th>
          <th>ESTADO</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido, index) => (
          <tr key={index}>
            <td className="numero-pedido-id">{pedido.id}</td>
            <td>{pedido.creado}</td>
            <td className="nombre-cliente">{pedido.cliente}</td>
            <td>{pedido.total}</td>
            <td>{pedido.ganancia}</td>
            <td><span className={`estado ${pedido.estado.toLowerCase()}`}>{pedido.estado} ▼</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaPedidos;
