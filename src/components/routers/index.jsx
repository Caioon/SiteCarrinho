import React from "react";
import { Route, Routes, Navigate} from "react-router";
import Home from "../../pages/home/home"; 
import Login from "../../pages/login/login"; 
import CriarLogin from "../../pages/login/criarLogin"; 

export default function Routers() {
 return (
   <Routes>
     <Route path="/" element={<Navigate to="/login" />} />
     <Route path="/login" element={<Login />} />
     <Route path="/criarLogin" element={<CriarLogin/>} />
     <Route path="/home" element={<Home />} />
   </Routes>
 );
}
   
