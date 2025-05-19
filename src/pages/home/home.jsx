import React, { useState } from 'react'; 
import Produtos from '../../components/produtos/Produtos';
import Carrinho from '../../components/carrinho/Carrinho';
import './home.css';

export default function Home() {
 const [cartItems, setCartItems] = useState([]);
 const handleAdd = produto => {
   setCartItems(prev => [...prev, produto]);
 };
 const handleRemove = index => {
   setCartItems(prev => prev.filter((_, i) => i !== index));
 };
 return (
   <div className="container">
     <div className="left">
       <Produtos onAdd={handleAdd} />
     </div>
     <Carrinho items={cartItems} onRemove={handleRemove} />
   </div>
 );
}

