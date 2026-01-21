import "./login.css";
import deltaIco from "../../assets/iconmini.png";

import InputLabel from "../../components/pages/cadastrar/inputLabels/inputLabel";
import Btn from "../../components/buttons/btn/btn";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { host_backend } from "../../config/config";

export default function Login() {
    const { auth, authUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handle_submit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const usuario = {
            login: formData.get("login"),
            senha: formData.get("senha"),
        };

        fetch(`${host_backend}/login`, {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem(
                    "token",
                    JSON.stringify({ token: data.token }),
                );
                authUser(data.token);
                navigate("/home");
            });
    }

    return (
        <div className="bodyLgn">
            <div className="border lgnDiv">
                <div className="headerLgn">
                    <img src={deltaIco} alt="sla" style={{ height: "40px" }} />
                    <h3 style={{ fontWeight: 600 }}> Entrar </h3>
                </div>
                <form
                    className="mainLgn"
                    method="POST"
                    onSubmit={handle_submit}
                >
                    <InputLabel
                        name={"login"}
                        type={"text"}
                        width={"90%"}
                        title={"Login"}
                        placeholder={"Digite seu Login"}
                    />

                    <InputLabel
                        name={"senha"}
                        type={"password"}
                        width={"90%"}
                        title={"Senha"}
                        placeholder={"Digite sua senha (chave de acesso)"}
                        maxLength={8}
                    />
                    <div className="footerLgn">
                        <Btn title={"Entrar"} className="btnlgn" />
                    </div>
                </form>

                <nav>
                    <Link to="/cadastrar" className="linkToCdt">
                        Novo por aqui? Cadastre agora!
                    </Link>
                </nav>
            </div>
        </div>
    );
}
