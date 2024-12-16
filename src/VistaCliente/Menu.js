import React from 'react';
import './Menu.css';

function App() {
  return (
    <div className="background-container"> {/* Nueva clase */}
      <div className="main-container">
        <main className="app-main">
          <h2>Menú de Opciones</h2>
          <div className="menu-options">
            <div className="menu-item">
              <button className="menu-button">
                <span className="icon">➕</span>
                <span>Productos</span>
              </button>
            </div>
            <div className="menu-item">
              <button className="menu-button">
                <span className="icon">🛒</span>
                <span>Carrito</span>
              </button>
            </div>
            <div className="menu-item">
              <button className="menu-button">
                <span className="icon">💳</span>
                <span>Historial de Transacciones</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;