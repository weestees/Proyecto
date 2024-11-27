import React, { useState } from "react";
import { FaPlus, FaFilter, FaDownload, FaIconName } from "react-icons/fa"; // Asegúrate de reemplazar 'FaIconName' con el nombre del icono que estás utilizando
import "./VendedorTable.css";

const TablaVendedores = () => {
  const [vendedores, setVendedores] = useState([
    { nombre: "Richard Martin", ingreso: "11/12/22", numero: "7867745566", email: "richard@gmail.com", estado: "Activo", ubicacion: "Ubicación Actual" },
    { nombre: "Tom Homan", ingreso: "11/12/22", numero: "9657545388", email: "tomhoman@gmail.com", estado: "Activo", ubicacion: "Ubicación Actual" },
    { nombre: "Veandir", ingreso: "11/12/22", numero: "9657545566", email: "veandir@gmail.com", estado: "Inactivo", ubicacion: "-" },
    { nombre: "Charin", ingreso: "11/12/22", numero: "9657545388", email: "charin@gmail.com", estado: "Activo", ubicacion: "-" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [nuevoVendedor, setNuevoVendedor] = useState({
    nombre: "",
    ingreso: new Date().toLocaleDateString("en-GB"),
    numero: "",
    email: "",
    estado: "Activo",
    ubicacion: "-",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoVendedor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAgregarVendedor = (e) => {
    e.preventDefault();
    setVendedores((prev) => [...prev, nuevoVendedor]);
    setNuevoVendedor({
      nombre: "",
      ingreso: new Date().toLocaleDateString("en-GB"),
      numero: "",
      email: "",
      estado: "Activo",
      ubicacion: "-",
    });
    setShowForm(false);
  };

  return (
    <div className="tabla-container">
      <div className="header">
        <h2>Vendedores</h2>
        <div className="action-buttons">
          <button onClick={() => setShowForm(true)}>
            <FaPlus /> Agregar
          </button>
          <button>
            <FaFilter /> Filtros
          </button>
          <button>
            <FaDownload /> Descargar
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nombres del Vendedor</th>
            <th>Ingreso</th>
            <th>Número</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {vendedores.map((vendedor, index) => (
            <tr key={index}>
              <td>{vendedor.nombre}</td>
              <td>{vendedor.ingreso}</td>
              <td>{vendedor.numero}</td>
              <td>{vendedor.email}</td>
              <td className={vendedor.estado === "Activo" ? "estado-activo" : "estado-inactivo"}>
                {vendedor.estado}
              </td>
              <td>{vendedor.ubicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h3>Nuevo Vendedor</h3>
            <form onSubmit={handleAgregarVendedor}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={nuevoVendedor.nombre}
                  onChange={handleInputChange}
                  required
                  placeholder="Ingrese el nombre"
                />
              </div>
              <div className="form-group">
                <label>Número</label>
                <input
                  type="text"
                  name="numero"
                  value={nuevoVendedor.numero}
                  onChange={handleInputChange}
                  required
                  placeholder="Ingrese el número"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={nuevoVendedor.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Ingrese el email"
                />
              </div>
              <div className="form-buttons">
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancelar
                </button>
                <button type="submit">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaVendedores;
