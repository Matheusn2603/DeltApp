import "./homeFooter.css";
import { useNavigate } from "react-router-dom";

export default function HomeFooter() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <footer id="footer">
            <div id="footerContent">
                <div className="footerSection" id="devs">
                    <h4>Desenvolvedores</h4>
                    <p>Matheus do Nascimento Araújo</p>
                    <p>Matheus Fernandes dos Santos</p>
                    <p>José Arthur Nascimento Santos</p>
                </div>

                <div className="footerSection" id="about">
                    <h4>Sobre o DeltAPP</h4>
                    <p>
                        DeltAPP é uma rede social criada para conectar pessoas
                        com gostos em comum. Nosso objetivo é unir tecnologia e
                        criatividade em um só lugar.
                    </p>
                    <p> Versão: 1.0 </p>
                </div>

                <div className="footerSection" id="account">
                    <h4>Conta</h4>
                    <button id="logoutBtn" onClick={logout}>
                        Sair da conta
                    </button>
                </div>
            </div>

            <div id="footerCopy">
                <p>© 2026 DeltAPP — Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
