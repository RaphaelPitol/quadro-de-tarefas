import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import Tarefa from "./pages/tarefa/tarefa";

export function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tarefa" element={<Tarefa />} />
            </Routes>
        </BrowserRouter>
    )
}
