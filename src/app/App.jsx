import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "../routes/main";
import Cadastro from "../routes/cadastrar/cadastro";
import Login from "../routes/login/login";
import Home from "../routes/home/home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
