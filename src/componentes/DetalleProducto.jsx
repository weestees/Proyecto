import React from "react";
import { useParams } from "react-router-dom";

const dataProductos = {
  1: {
    nombre: "Gas 1",
    id: "1",
    tipo: "GLP en cilindros DOMÉSTICO",
    fecha: "13/4/23",
    valor: "$3.50",
    proveedor: "CONGAS",
    numero: "98789 86757",
    apertura: 40,
    stockRestante: 34,
    enCamino: 15,
  },
  2: {
    nombre: "Gas 2",
    id: "2",
    tipo: "GLP en cilindros INDUSTRIAL",
    fecha: "14/5/23",
    valor: "$4.50",
    proveedor: "MEGAGAS",
    numero: "98789 12345",
    apertura: 30,
    stockRestante: 20,
    enCamino: 10,
  },
};

const DetalleProducto = () => {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const producto = dataProductos[id]; // Busca los datos del producto

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p><strong>Producto ID:</strong> {producto.id}</p>
      <p><strong>Tipo:</strong> {producto.tipo}</p>
      <p><strong>Fecha:</strong> {producto.fecha}</p>
      <p><strong>Valor:</strong> {producto.valor}</p>
      <p><strong>Nombre del Proveedor:</strong> {producto.proveedor}</p>
      <p><strong>Número:</strong> {producto.numero}</p>
      <p><strong>Apertura:</strong> {producto.apertura}</p>
      <p><strong>Stock Restante:</strong> {producto.stockRestante}</p>
      <p><strong>En Camino:</strong> {producto.enCamino}</p>
    </div>
  );
};

export default DetalleProducto;
