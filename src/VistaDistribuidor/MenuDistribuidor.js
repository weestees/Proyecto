import React from 'react';
import './Menu.css';
import './App.css';

function App() {
  return (
    <div>

      <div className="main-container">
        <main className="app-main">
          <h2>Menú de Opciones</h2>
          <div className="menu-options">
            <div className="menu-item">
              <button className="menu-button">
                <span className="icon">➕</span>
                <span>Gestion de Vendedores</span>
              </button>
            </div>
            <div className="menu-item">
              <button className="menu-button">
                <span className="icon">🛒</span>
                <span>Inventario</span>
              </button>
            </div>
            <div className="menu-item">
              <button className="menu-button">
                <span className="icon">💳</span>
                <span>Reporte</span>
              </button>
            </div>
          </div>
        </main>
      </div>
      </div>


  );
}

export default App;