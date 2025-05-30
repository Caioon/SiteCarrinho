import React from "react";
import { Route, Routes, Navigate} from "react-router";
import Shop from "../../pages/shop/shop"; 
import Login from "../../pages/login/login"; 
import CriarLogin from "../../pages/login/criarLogin"; 
import Home from "../../pages/home/home";
import CriarProduto from "../../pages/home/criarProduto/criarProduto";
import RemoverProduto from "../../pages/home/removerProduto/removerProduto";
import AtualizarProduto from "../../pages/home/atualizarProduto/atualizarProduto";

export default function Routers() {
 return (
   <Routes>
     <Route path="/" element={<Navigate to="/login" />} />
     <Route path="/login" element={<Login />} />
     <Route path="/criarLogin" element={<CriarLogin/>} />
     <Route path="/home" element={<Home />} />
     <Route path="/criarProduto" element={<CriarProduto />} />
     <Route path="/removerProduto" element={<RemoverProduto />} />
     <Route path="/atualizarProduto" element={<AtualizarProduto />} />
     <Route path="/shop" element={<Shop />} />
   </Routes>
 );
}
   
