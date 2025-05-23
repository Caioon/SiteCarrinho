import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './login.css';

export default function CriarLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find(u => u.email === email)) {
      setError('Email já cadastrado');
      return;
    }

    usuarios.push({ email, senha });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    setError('');
    setEmail('');
    setSenha('');

    navigate('/login');
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Criar Conta</h2>
        <form onSubmit={handleCadastro}>
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
          <button type="submit">Cadastrar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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