import { useEffect, useState } from "react";
import "./modalUser.css";
import { jwtDecode } from "jwt-decode";
import { host_backend } from "../../../../config/config";

export default function ModalUser({ onClose, visible }) {
    const [usuario_nome, setUsuario_nome] = useState("");
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        const usuario_decode = jwtDecode(localStorage.getItem("token"));
        setUsuario(usuario_decode);
        setUsuario_nome(usuario_decode.nome_usuario);
    }, []);

    function handle_salvar() {
        console.log(usuario_nome);
        fetch(`${host_backend}/usuario/update_name/${usuario.login}`, {
            method: "PUT",
            body: JSON.stringify({ nome_usuario: usuario_nome }),
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
                        onClose();
                    });
            })
            .catch((err) => {});
    }

    return (
        <div className={`modalUserBg ${visible}`}>
            <div className="modalUser">
                <button
                    className="exitModal"
                    onClick={() => {
                        onClose();
                    }}
                >
                    X
                </button>

                <div className="modalUserHeader">
                    <div className="userIco"></div>
                    <input
                        type="text"
                        value={usuario_nome || ""}
                        onChange={(e) => setUsuario_nome(e.target.value)}
                        className="modalUserInput"
                        maxLength={14}
                        id="nome_usuario"
                    />
                </div>

                <div className="modalUserBody">
                    <p style={{ color: "rgba(255, 255, 255, 0.311)" }}> ID: </p>
                    <button className="saveInfoBtn" onClick={handle_salvar}>
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}
