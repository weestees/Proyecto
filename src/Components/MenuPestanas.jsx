import React from 'react';

const MenuPestanas = () => {
  const categorias = ["TODOS", "Pendiente", "Confirmado", "Procesado", "Enviado", "Entregado", "Cancelado"];

  return (
    <div className="menu-pestanas">
      {categorias.map((categoria, index) => (
        <a key={index} href={`#${categoria.toLowerCase()}`} className={`pestana ${index === 0 ? 'activa' : ''}`}>
          {categoria}
        </a>
      ))}
    </div>
  );
};

export default MenuPestanas;
