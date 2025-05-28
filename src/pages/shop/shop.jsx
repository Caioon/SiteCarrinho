import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router';
import Produtos from '../../components/produtos/Produtos';
import Carrinho from '../../components/carrinho/Carrinho';
import './shop.css';

export default function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const logado = localStorage.getItem('logado');
    if (logado !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleAdd = produto => {
    setCartItems(prev => [...prev, produto]);
  };

  const handleRemove = index => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleLogout = () => {
    localStorage.setItem('logado', 'false');
    localStorage.removeItem('usuarioAtual');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="left">
        <button className="logout-btn" onClick={handleLogout}>Sair</button>
        <Produtos onAdd={handleAdd} />
      </div>
      <Carrinho items={cartItems} onRemove={handleRemove} />
    </div>
  );
}