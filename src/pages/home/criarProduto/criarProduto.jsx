import { useNavigate } from "react-router";
import { useState } from 'react';
import './criarProduto.css';
import ModalCriarProduto from "./modalCriarProduto";
import "./modalCriarProduto.css";

export default function CriarProduto(){

    const [nomeProduto, setNomeProduto] = useState('');
    const [valor, setValor] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);


    const abrirModal = () => {
        setIsModalOpen(true);
    };

    const fecharModal = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    const verificarCampos = (nomeProduto, valor, url) => {
        if(nomeProduto == '' || valor == '' || url == '')
            setError('Preencha todos os campos!');
        else{
            setError('');
            abrirModal();
        }
    }
    const cadastrarProduto = (e) => {
        e.preventDefault();
        alert('Produto cadastrado com sucesso! (função meramente ilustrativa)');
        navigate('/home');
    }

    return (
        <div className="criar-Produto"> 
            <p className="text">Criar Produto</p>
            <br></br>
            <form className="formulario" onSubmit={cadastrarProduto}>
                <p className="text">Nome:</p>
                <input className="input-Produto"
                    type="text"
                    placeholder="Nome do Produto"
                    value={nomeProduto}
                    onChange={e => setNomeProduto(e.target.value)}
                    required
                />
                <p className="text">Valor:</p>
                <input className="input-Produto"
                    type="text"
                    placeholder="Valor do Produto"
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                    required
                />
                <p className="text">Url da imagem:</p>
                <input className="input-Produto"
                    type="text"
                    placeholder="Url da imagem do produto"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    required
                />

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isModalOpen && (
            <ModalCriarProduto isOpen={isModalOpen} onClose={fecharModal}>

                <h2>Prévia do produto:</h2>

                <img className="preview-img" src={url} alt={nomeProduto}/>

                <p>Nome: {nomeProduto}</p>
                
                <p>Valor: R${valor}</p>

                <button type="submit">Cadastrar Produto</button>
            </ModalCriarProduto> )}
            </form>
            <button className="cadastrar" onClick={() => verificarCampos(nomeProduto, valor, url)}>Continuar</button>            


            <button className="navegar" onClick={() => navigate('/home')}>Voltar</button>            
        </div>
    );
}
