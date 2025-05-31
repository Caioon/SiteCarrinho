import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router';
import Produtos from '../../components/produtos/Produtos';
import Carrinho from '../../components/carrinho/Carrinho';
import { LerProdutos } from '../../components/data/fetchProdutos'; 
import './shop.css';

export default function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [produtos, setProdutos] = useState([]);  
  const navigate = useNavigate();

  useEffect(() => {
    const logado = localStorage.getItem('logado');
    if (logado !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);

  const handleAdd = produto => {
    setCartItems(prev => [...prev, produto]);
  };

  const handleRemove = index => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="left">
        <Produtos produtos={produtos} onAdd={handleAdd} />
      </div>
      <Carrinho items={cartItems} onRemove={handleRemove} />
      <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
    </div>
  );
}
