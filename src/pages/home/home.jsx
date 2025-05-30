import { useNavigate } from "react-router";
import "./home.css";

export default function Home(){

    const navigate = useNavigate();
    return (
        <div className="home"> 
            <button onClick={() => navigate('/criarProduto')}>Criar Produto</button> 
            <button onClick={() => navigate('/atualizarProduto')}>Atualizar Produto</button> 
            <button onClick={() => navigate('/removerProduto')}>Remover Produto</button> 
            <button onClick={() => navigate('/shop')}>Shop</button> 
            <button onClick={() => navigate('/login')}>Login</button> 
        </div>
    );
}
