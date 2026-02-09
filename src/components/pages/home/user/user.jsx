import "./user.css";
import userIco from "../../../../assets/svgs/user.svg";
import { host_backend } from "../../../../config/config";
import { useState } from "react";

export default function User({ userName, amigo, usuario }) {
    const [isEnviado, setEnviado] = useState(false);

    function request_friendship() {
        if (!isEnviado) {
            const amizade = {
                login_usuario: usuario,
                login_amigo: amigo,
            };

            fetch(`${host_backend}/amizade/ask_amizade`, {
                method: "POST",
                body: JSON.stringify(amizade),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(() => {
                const conversa = { isGroup: false };

                fetch(`${host_backend}/conversa/create`, {
                    method: "POST",
                    body: JSON.stringify(conversa),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(() => {
                    console.log("Sucesso!");
                });
                setEnviado(true);
            });
        } else {
            alert("Você só pode enviar uma requisição de amizade");
        }
    }

    return (
        <div className="aUser">
            <div className="userImg">
                <img src={userIco} alt="userIcon" style={{ height: 40 }} />
            </div>
            <p style={{ fontWeight: 700 }}> {userName} </p>
            <p>{amigo}</p>
            <button className="addFriend" onClick={request_friendship}>
                {isEnviado ? "-" : "+"}
            </button>
        </div>
    );
}
