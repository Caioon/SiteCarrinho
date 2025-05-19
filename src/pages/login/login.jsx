import React from 'react';
import { useNavigate } from 'react-router';
import './login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <a onClick={() => navigate('/criarLogin')}>Crie uma aqui</a>
      </p>
    </div>
  );
}

