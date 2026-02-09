import "./createTopicoModal.css";
import { useState } from "react";
import { host_backend } from "../../../../config/config";

export default function CreateTopicoModal({ situation, onClose }) {
    useState(() => {}, []);

    function handle_submit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const topico = { nome_topico: formData.get("nome") };

        fetch(host_backend + "/topico/create", {
            method: "POST",
            body: JSON.stringify(topico),
            headers: {
                "Content-Type": "application/json",
            },
        });

        onClose();
    }

    return (
        <div className={`modalCreateTopicoBg ${situation}`}>
            <div className="modalCreateTopico">
                <div className="modalTopicoHeader">
                    <p
                        style={{
                            fontWeight: 900,
                            fontSize: "20px",
                            marginLeft: "20px",
                        }}
                    >
                        {" "}
                        Criar Tópico
                    </p>
                </div>
                <form className="modalTopicoBody" onSubmit={handle_submit}>
                    <label htmlFor="inome">Nome:</label>
                    <input
                        className="TopicoNameInput"
                        id="inome"
                        name="nome"
                        placeholder="Digite o nome da sua comunidade..."
                    />
                    <div className="checkModalTopico">
                        <input
                            type="checkbox"
                            style={{
                                transform: "scale(1.8)",
                                marginRight: "10px",
                                border: "none",
                            }}
                        />

                        <p> Declaro que concordo e li os termos e condições </p>
                    </div>

                    <button className="createTopico">Criar</button>

                    <button
                        className="exitModal"
                        onClick={() => {
                            onClose();
                        }}
                        type="button"
                    >
                        X
                    </button>
                </form>
            </div>
        </div>
    );
}
