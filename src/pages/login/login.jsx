import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './login.css';
import { verificarLogin } from './sessionManager';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let validado = verificarLogin(email, senha);  

    console.log('handleLogin');
    if (validado) {
      navigate('/home');
    } else {
      setError('Email ou senha incorretos');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
