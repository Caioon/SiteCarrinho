import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { verificarConta } from './sessionManager';
import './login.css';

export default function CriarLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    
    let validado = verificarConta(email, senha);

    if(validado){
      alert('Login criado com sucesso!');
      navigate('/login');
    } else{
      setError('Email já cadastrado');    
    }
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
