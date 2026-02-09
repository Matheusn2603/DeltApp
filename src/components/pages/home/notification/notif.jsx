import { host_backend } from "../../../../config/config";
import "./notif.css";

export default function Notification({ usuario, amigo }) {
    function accept_request() {
        const confirmation = {
            login_usuario: usuario,
            login_amigo: amigo,
        };

        fetch(`${host_backend}/amizade/confirm_amizade`, {
            method: "PUT",
            body: JSON.stringify(confirmation),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return (
        <div className="notfMainDiv">
            <div className="notfIcon"></div>
            <div className="notfBody">
                <p style={{ marginTop: "30px", fontWeight: "bold" }}>
                    {" "}
                    Solicitação de Amizade de {usuario}{" "}
                </p>
            </div>
            <button
                className="aceptBtn"
                style={{ fontWeight: "bold", fontSize: 20 }}
                onClick={accept_request}
            >
                {" "}
                ✓{" "}
            </button>
            <button
                className="deleteBtn"
                style={{ fontWeight: "bold", fontSize: 20 }}
            >
                {" "}
                X{" "}
            </button>
        </div>
    );
}
