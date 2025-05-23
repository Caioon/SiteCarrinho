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
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p>
          Não tem uma conta?{' '}
          <span className="link" onClick={() => navigate('/criarLogin')}>
            Crie uma aqui
          </span>
        </p>
      </div>
    </div>
  );
}
