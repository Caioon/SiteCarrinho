import { useNavigate } from "react-router";
import { produtos } from "../../../components/produtos/produtosData";
import { useState } from "react";
import ModalRemoverProduto from "./modalRemoverProduto";
import "./modalRemoverProduto.css";
import { useEffect } from "react";
import { LerProdutos } from "../../../components/data/fetchProdutos";
import { DeletarProduto } from "../../../components/data/fetchProdutos";

export default function RemoverProduto(){

    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        LerProdutos(setProdutos);
    }, []);

    const abrirModal = (produto) => {
        setProdutoSelecionado(produto);
        setIsModalOpen(true);
    };

    const fecharModal = () => {
        setIsModalOpen(false);
        setProdutoSelecionado(null);
    };

    const removerProduto = () => {
        console.log(produtoSelecionado);
        const id = produtoSelecionado.id;
        console.log(id);
        DeletarProduto(id);
        alert('Produto removido com sucesso!');
        navigate('/home');
    }

    const navigate = useNavigate();
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
                    <button className="remove-btn" onClick={() => abrirModal(p)}>Remover</button>
                </div>
                ))}
            </div>

        {isModalOpen && (
        <ModalRemoverProduto isOpen={isModalOpen} onClose={fecharModal} remove={removerProduto}>

            <img className="modal-remove-img" src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} />
            <p>Produto: {produtoSelecionado.nome}</p>
            <p>Valor: R${produtoSelecionado.valor.toFixed(2)}</p>

        </ModalRemoverProduto> )}
            <button className="back-btn" onClick={() => navigate('/home')}>Home</button>
        </div>
    );
}