import React from 'react';
import './Carrinho.css';
import { useNavigate } from 'react-router';

export default function Carrinho({ items, onRemove }) {
    const navigate = useNavigate();

    const finalizarCompra = () => {
      alert('Compra finalizada!');
      navigate('/home');
    };

  return (
    <div className="right">
      <h2>Carrinho de Compras</h2>
      {items.length === 0 && <p>Seu carrinho está vazio.</p>}
      {items.map((item, idx) => (
        <div key={idx} className="cart-item">
          <img src={item.imagem} alt={item.nome} />
          <div className="cart-info">
            <h3>{item.nome}</h3>
            <button className="remove-btn" onClick={() => onRemove(idx)}>-</button>
          </div>
        </div>
      ))}
      {items.length > 0 && <button className="checkout-btn" onClick={finalizarCompra}>Finalizar Compra</button>}
    </div>
  );
}
