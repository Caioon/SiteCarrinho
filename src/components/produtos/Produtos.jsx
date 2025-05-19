import React from 'react';
import { produtos } from './produtosData';
import './Produtos.css';

export default function Produtos({ onAdd }) {
  return (
    <>
      <h2>Produtos Disponíveis</h2>
      <div className="produtos-grid">
        {produtos.map((p, idx) => (
          <div key={idx} className="product-card">
            <img src={p.imagem} alt={p.nome} />
            <div className="produto-info">
              <h3>{p.nome}</h3>
              <span>R$ {p.valor.toFixed(2)}</span>
            </div>
            <button className="add-btn" onClick={() => onAdd(p)}>Comprar</button>
          </div>
        ))}
      </div>
    </>
  );
}
