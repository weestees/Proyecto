import React from 'react';

const TablaPedidos = () => {
  const pedidos = [
    { id: "#6548", creado: "2 min atras", cliente: "Joseph Wheeler", total: "$654", ganancia: "$154", estado: "Pendiente" },
    { id: "#6549", creado: "5 min atras", cliente: "Emily Smith", total: "$780", ganancia: "$200", estado: "Confirmado" },
    { id: "#6550", creado: "10 min atras", cliente: "John Doe", total: "$920", ganancia: "$250", estado: "Enviado" },
    { id: "#6548", creado: "2 min atras", cliente: "Joseph Wheeler", total: "$654", ganancia: "$154", estado: "Pendiente" },
    { id: "#6549", creado: "5 min atras", cliente: "Emily Smith", total: "$780", ganancia: "$200", estado: "Confirmado" },
    { id: "#6550", creado: "10 min atras", cliente: "John Doe", total: "$920", ganancia: "$250", estado: "Enviado" },
    { id: "#6548", creado: "2 min atras", cliente: "Joseph Wheeler", total: "$654", ganancia: "$154", estado: "Pendiente" },
    { id: "#6549", creado: "5 min atras", cliente: "Emily Smith", total: "$780", ganancia: "$200", estado: "Confirmado" },
    { id: "#6550", creado: "10 min atras", cliente: "John Doe", total: "$920", ganancia: "$250", estado: "Enviado" },
    { id: "#6548", creado: "2 min atras", cliente: "Joseph Wheeler", total: "$654", ganancia: "$154", estado: "Pendiente" },
    { id: "#6549", creado: "5 min atras", cliente: "Emily Smith", total: "$780", ganancia: "$200", estado: "Confirmado" },
    { id: "#6550", creado: "10 min atras", cliente: "John Doe", total: "$920", ganancia: "$250", estado: "Enviado" },
  ];

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
