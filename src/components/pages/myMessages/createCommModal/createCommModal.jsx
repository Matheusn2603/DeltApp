import "./createCommModal.css";
import commIco from "../../../../assets/svgs/community.svg";
import { useState } from "react";
import { host_backend } from "../../../../config/config";

export default function CreateCommModal({ situation, onClose }) {
    const [topicos, setTopicos] = useState([]);

    function handle_submit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const comunidade = { nome_comunidade: formData.get("nome") };

        console.log(comunidade);
        fetch(host_backend + "/comunidade/create", {
            method: "POST",
            body: JSON.stringify(comunidade),
            headers: {
                "Content-Type": "application/json",
            },
        });

        onClose();
    }

    useState(() => {
        fetch(host_backend + "/topico/get_all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setTopicos(data.results);
            });
    }, []);

    function render_topicos() {
        return topicos.map((topico) => {
            return (
                <option value={topico.id_topico} key={topico.id_topico}>
                    {topico.nome_topico}
                </option>
            );
        });
    }

    return (
        <div className={`modalCreateCommBg ${situation}`}>
            <div className="modalCreateComm">
                <div className="modalCommHeader">
                    <img
                        src={commIco}
                        style={{ height: "50px" }}
                        className="commIco"
                    />
                    <p style={{ fontWeight: 900, fontSize: "20px" }}>
                        {" "}
                        Criar Comunidade
                    </p>
                </div>
                <form className="modalCommBody" onSubmit={handle_submit}>
                    <label htmlFor="inome">Nome:</label>
                    <input
                        className="commNameInput"
                        id="inome"
                        name="nome"
                        placeholder="Digite o nome da sua comunidade..."
                    />
                    <label>Tópicos:</label>
                    <select name="topico" className="topicos">
                        {render_topicos()}
                    </select>
                    <div className="checkModalComm">
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

                    <button className="createComm">Criar</button>

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
