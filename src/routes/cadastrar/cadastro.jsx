import "./cadastro.css";
import deltaIco from "../../assets/iconmini.png";
import InputLabel from "../../components/pages/cadastrar/inputLabels/inputLabel";
import Btn from "../../components/buttons/btn/btn";
import { Link, useNavigate } from "react-router-dom";
import { host_backend } from "../../config/config";

export default function Cadastro() {
    const navigate = useNavigate();

    function handle_submit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const usuario = {
            nome_usuario: formData.get("nome_usuario"),
            login: formData.get("login"),
            senha: formData.get("senha"),
        };

        fetch(`${host_backend}/usuario/create`, {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
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
                        navigate("/home");
                    });
            })
            .catch((err) => {});
    }

    return (
        <div className="bodyCdtr">
            <div className="border cdtrDiv">
                <div className="headerCdtr">
                    <img src={deltaIco} alt="sla" style={{ height: "40px" }} />
                    <h3 style={{ fontWeight: 600 }}> Cadastrar </h3>
                </div>
                <form
                    className="mainCdtr"
                    method="post"
                    onSubmit={handle_submit}
                >
                    <InputLabel
                        name={"nome_usuario"}
                        type={"text"}
                        width="90%"
                        title={"Nome de Usuário"}
                        placeholder={"Digite o nome do seu perfil"}
                    />
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
                    <div className="footerCdtr">
                        <Btn title={"Cadastrar"} className="btnctr" />
                    </div>
                </form>
            </div>

            <nav>
                <Link to="/login" className="linkToLogin">
                    Já passou por aqui? Entre agora!{" "}
                </Link>
            </nav>
        </div>
    );
}
