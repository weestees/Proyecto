import React from "react";
import { Link } from "react-router-dom";
import "./InventarioLista.css"; 

class InventarioLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      inventario: [
        { id: 1, nombre: "Gas 1", precio: 3.50, cantidad: 2, valor: 3.50 * 2, fecha: "11/12/2022", disponibilidad: "En stock" },
        { id: 2, nombre: "Gas 1", precio: 3.50, cantidad: 3, valor: 3.50 * 3, fecha: "21/12/2022", disponibilidad: "Agotado" },
        { id: 3, nombre: "Gas 1", precio: 3.50, cantidad: 4, valor: 3.50 * 4, fecha: "05/12/2022", disponibilidad: "En stock" },
        { id: 4, nombre: "Gas 1", precio: 3.50, cantidad: 1, valor: 3.50 * 1, fecha: "08/12/2022", disponibilidad: "Agotado" },
        { id: 5, nombre: "Gas 1", precio: 3.50, cantidad: 3, valor: 3.50 * 3, fecha: "09/01/2023", disponibilidad: "En stock" },
        { id: 6, nombre: "Gas 1", precio: 3.50, cantidad: 1, valor: 3.50 * 1, fecha: "15/12/2023", disponibilidad: "Agotado" },
        { id: 7, nombre: "Gas 1", precio: 3.50, cantidad: 5, valor: 3.50 * 5, fecha: "06/06/2023", disponibilidad: "En stock" },
        { id: 8, nombre: "Gas 1", precio: 3.50, cantidad: 3, valor: 3.50 * 3, fecha: "11/11/2023", disponibilidad: "Bajo stock" },
      ],
    };
  }

  handleInputChange = (event) => {
    this.setState({ busqueda: event.target.value });
  };

  render() {
    const { busqueda, inventario } = this.state;

    // Filtrar los productos según la búsqueda
    const inventarioFiltrado = inventario.filter((item) =>
      item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
      <div className="inventario-lista">
        <h2>Inventario</h2>

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={this.handleInputChange}
          className="busqueda-input"
        />

        {/* Tabla de inventario */}
        <table className="tabla-inventario">
          <thead>
            <tr>
              <th>Productos</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th>Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            {inventarioFiltrado.map((producto) => (
              <tr key={producto.id}>
                {/* Crear un enlace con Link al detalle del producto */}
                <td>
                  <Link to={`/producto/${producto.id}`}>
                    {producto.nombre}
                  </Link>
                </td>
                <td>${producto.precio.toFixed(2)}</td>
                <td>{producto.cantidad}</td>
                <td>${producto.valor.toFixed(2)}</td>
                <td>{producto.fecha}</td>
                <td
                  className={
                    producto.disponibilidad === "En stock"
                      ? "disponibilidad-en-stock"
                      : producto.disponibilidad === "Bajo stock"
                      ? "disponibilidad-bajo-stock"
                      : "disponibilidad-agotado"
                  }
                >
                  {producto.disponibilidad}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InventarioLista;
