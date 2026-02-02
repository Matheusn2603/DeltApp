import "./modalNot.css";

import Notification from "../notification/notif";
import { useEffect, useState } from "react";
import { host_backend } from "../../../../config/config";
import { jwtDecode } from "jwt-decode";

export default function ModalNot({ visible, closeModal }) {
    const [notificacoes, setNotificacoes] = useState([]);
    const usuario = jwtDecode(JSON.parse(localStorage.getItem("token")).token);

    useEffect(() => {
        fetch(
            `${host_backend}/amizade/get_all_pedidos_amizade/${usuario.login}`,
            {
                "Content-Type": "application/json",
            },
        )
            .then((res) => res.json())
            .then((data) => {
                setNotificacoes(data.results);
            });
    }, []);

    function render_notificacoes() {
        if (notificacoes.length > 0) {
            return notificacoes.map((notif) => (
                <Notification
                    usuario={notif.login_usuario}
                    amigo={notif.login_amigo}
                    key={notif.login_usuario + notif.login_amigo}
                />
            ));
        } else {
            return (
                <>
                    <p> X_X </p>
                    <p> Sem Notificações no momento</p>
                </>
            );
        }
    }

    return (
        <div className={`modalnotbg ${visible}`}>
            <div className="modalnot">
                <button
                    className="exitModal"
                    onClick={() => {
                        closeModal();
                    }}
                >
                    X
                </button>

                <div className="modalNotHeader">
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {" "}
                        Notificações{" "}
                    </p>
                </div>

                <div className="modalNotBody">
                    <div className="notNotifsForYou">
                        {render_notificacoes()}
                    </div>
                </div>
            </div>
        </div>
    );
}
