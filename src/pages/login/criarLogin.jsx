import React from 'react';
import { useNavigate } from 'react-router';
import './login.css';
 

export default function CriarLogin() {
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleCadastro}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

