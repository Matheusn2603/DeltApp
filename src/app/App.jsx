import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "../routes/main";
import Cadastro from "../routes/cadastrar/cadastro";
import Login from "../routes/login/login";
import Home from "../routes/home/home";
import MyMessages from "../routes/myMessages/myMessages";
import MyComms from "../routes/myComms/myComms";
import AdmTool from "../routes/admtool/admtool";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/myMessages" element={<MyMessages />} />
                <Route path="/myComms" element={<MyComms/>} />
                <Route path="/admTools" element={<AdmTool/>}/>
            </Routes>
        </BrowserRouter>
    );
}
