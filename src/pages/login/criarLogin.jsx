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
    <div className="container">
      <div className="form-box">
        <h2>Criar Conta</h2>
        <form onSubmit={handleCadastro}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Cadastrar</button>
        </form>
        <p>
          Já tem uma conta?{' '}
          <span className="link" onClick={() => navigate('/login')}>
            Faça login
          </span>
        </p>
      </div>
    </div>
  );
}
