import "./comm.css";
import commIco from "../../../../assets/svgs/community.svg";
import { useState } from "react";
import { host_backend } from "../../../../config/config";

export default function Comm({ nome, topico, login_usuario, id }) {
    const [isEnviado, setEnviado] = useState();

    function enter_community() {
        if (!isEnviado) {
            const usuarios_comunidades = {
                login: login_usuario,
                id_comunidade: id,
            };

            fetch(`${host_backend}/comunidade/entrar`, {
                method: "PUT",
                body: JSON.stringify(usuarios_comunidades),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(() => {
                setEnviado(true);
            });
        } else {
            alert("Você já pertence a esta comunidade");
        }
    }

    return (
        <div className="comm">
            <div className="commImg">
                <img src={commIco} alt="commIcon" style={{ height: 40 }} />
            </div>
            <p style={{ fontWeight: 700 }}>{nome}</p>
            <p style={{ fontWeight: 700 }}>{topico}</p>
            <button className="enterComm" onClick={enter_community}>
                {isEnviado ? "Entrou" : "Entrar"}
            </button>
        </div>
    );
}
