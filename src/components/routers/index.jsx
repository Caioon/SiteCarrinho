import React from "react";
import { Route, Routes, Navigate} from "react-router";
import Shop from "../../pages/shop/Shop"; 
import Login from "../../pages/login/login"; 
import CriarLogin from "../../pages/login/criarLogin"; 

export default function Routers() {
 return (
   <Routes>
     <Route path="/" element={<Navigate to="/login" />} />
     <Route path="/login" element={<Login />} />
     <Route path="/criarLogin" element={<CriarLogin/>} />
     <Route path="/shop" element={<Shop />} />
   </Routes>
 );
}
   
