import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const user = usuarios.find(u => u.email === email && u.senha === senha);

    if (user) {
      localStorage.setItem('logado', 'true');
      localStorage.setItem('usuarioAtual', email);
      setError('');
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