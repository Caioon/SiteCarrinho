import { useState } from "react";
import { useNavigate } from 'react-router';
import { useEffect } from "react";
import Modal from "./modalAtualizarProduto";
import './modalAtualizarProduto.css';
import { LerProdutos } from "../../../components/data/fetchProdutos";
import { AtualizarProduto } from "../../../components/data/fetchProdutos";

export default function AtualizarProdutos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [urlProduto, setUrlProduto] = useState('');
  const [error, setError] = useState('');

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);
    
  const navigate = useNavigate();

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setProdutoSelecionado(null);
  };

  function validarPreco(n) {
      let numero = Number(n);
      return typeof numero === 'number' && !isNaN(numero) && numero >= 0;
  }

  const editarProduto = () => {

    if (nomeProduto.trim() === '' || precoProduto === '') {
      setError('Preencha os campos de nome e valor!');
      return;
    }

    if (!validarPreco(precoProduto)) {
      setError('Valor do produto inválido!');
      return;
    }

    const valorFloat = Number(precoProduto);
    const id = produtoSelecionado.id;

    const imagemFinal = urlProduto.trim() === '' ? produtoSelecionado.imagem : urlProduto;

    AtualizarProduto(id, nomeProduto, valorFloat, imagemFinal);
    alert('Produto atualizado!');
    navigate('/home');
  };

  return (
    <div>
      <h2>Atualizar Produtos</h2>
      <div className="produtos-grid">
        {produtos.map((p, idx) => (
          <div key={idx} className="product-card">
            <img src={p.imagem} alt={p.nome} />
            <div className="produto-info">
              <h3>{p.nome}</h3>
              <span>R$ {p.valor.toFixed(2)}</span>
            </div>
            <button className="edit-btn" onClick={() => abrirModal(p)}>Editar</button>
          </div>
        ))}
      </div>

    <button className="back-btn" onClick={() => navigate('/home')}>Home</button>

    {isModalOpen && (
    <Modal isOpen={isModalOpen} onClose={fecharModal} update={editarProduto}>

        <h2>Editar Produto</h2>
        <img className="modal-img" src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} />

        <p>Nome Atual: {produtoSelecionado.nome}</p>
        <input type="text" placeholder='Insira o novo nome' value = {nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}/>
        
        <p>Valor Atual: R${produtoSelecionado.valor.toFixed(2)}</p>
        <input type="text" placeholder='Insira o novo valor' value = {precoProduto} onChange={(e) => setPrecoProduto(e.target.value)}/>

        <p>Url para nova imagem (deixar em branco caso queira manter a atual):</p>
        <input type="text" placeholder='Insira a url' value = {urlProduto} onChange={(e) => setUrlProduto(e.target.value)}/>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

    </Modal> )}

    </div>
  );
}
