import "./myMessages.css";
import Message from "../../components/pages/myMessages/message/message";
import UserSideBar from "../../components/pages/myMessages/usersSideBar/usersSideBar.jsx";
import CreateCommModal from "../../components/pages/myMessages/createCommModal/createCommModal.jsx";

import { useState, useEffect, useRef, use } from "react";
import { jwtDecode } from "jwt-decode";
import ComSideBar from "../../components/pages/myMessages/comSideBar/comSideBar.jsx";

import { host_backend, host_backend_ws } from "../../config/config.js";
import { io } from "socket.io-client";
import CreateTopicoModal from "../../components/pages/myMessages/createTopicoModal/createTopicoModal.jsx";

export default function MyMessages() {
    const [selectedUser, setSelectedUser] = useState({ name: "", login: "" });
    const [selectedComm, setSelectedComm] = useState("");

    const [openModalComm, setOpenModalComm] = useState("closedModal");

    const [openModalTopico, setOpenModalTopico] = useState("closedModal");

    const handlerOpenModalComm = () => {
        setOpenModalComm("openedModal");
    };

    const handlerClosedModalComm = () => {
        setOpenModalComm("closedModal");
    };

    const handlerOpenModalTopico = () => {
        setOpenModalTopico("openedModal");
    };

    const handlerClosedModalTopico = () => {
        setOpenModalTopico("closedModal");
    };

    const [mensagens, setMensagens] = useState([]);
    const usuario = jwtDecode(JSON.parse(localStorage.getItem("token")).token);
    const socketRef = useRef(null);
    const [conteudo_mensagem, setConteudo_mensagem] = useState("");

    function handleSendMessage(e) {
        e.preventDefault();
        const now = new Date();
        const salaId = selectedUser.id_amizade;

        const formData = new FormData(e.currentTarget);
        const mensagem = {
            receptor: selectedUser.login,
            emissor: usuario.login,
            conteudo: formData.get("conteudo"),
            data_envio: now.toISOString(),
            salaId: salaId,
        };

        socketRef.current.emit("enviar_mensagem", mensagem);
    }

    useEffect(() => {
        if (socketRef.current === null) {
            socketRef.current = io(host_backend_ws);

            socketRef.current.on("connect", () => {
                console.log("Conectado com sucesso!");
            });

            socketRef.current.on("receber_mensagem", (data) => {
                setMensagens((mensagens) => [...mensagens, JSON.parse(data)]);
            });
        } else {
            if (selectedUser.login != "") {
                const body = {
                    emissor: usuario.login,
                    receptor: selectedUser.login,
                };

                fetch(host_backend + "/mensagem/get_two_users_messages", {
                    body: JSON.stringify(body),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        socketRef.current.emit("entrar_conversa", {
                            salaId: selectedUser.id_amizade,
                        });
                        setMensagens(data.results);
                    });
            }
        }
    }, [selectedUser.name]);

    function render_messages() {
        if (mensagens.length > 0) {
            return mensagens.map((mensagem, ind) => {
                if (mensagem.emissor == usuario.login) {
                    return (
                        <Message
                            type="me"
                            text={mensagem.conteudo}
                            key={mensagem.id_mensagem}
                        />
                    );
                } else {
                    return (
                        <Message
                            type="other"
                            text={mensagem.conteudo}
                            key={mensagem.id_mensagem}
                        />
                    );
                }
            });
        }
    }

    return (
        <div className="bodyMessages">
            <UserSideBar selectName={setSelectedUser} />
            <ComSideBar
                openCreateComm={handlerOpenModalComm}
                openCreateTopico={handlerOpenModalTopico}
            />
            <CreateCommModal
                situation={openModalComm}
                onClose={handlerClosedModalComm}
            />
            <CreateTopicoModal
                situation={openModalTopico}
                onClose={handlerClosedModalTopico}
            />

            {selectedUser.name !== "" && (
                <div className="chatDiv">
                    <div className="chatHeader" style={{ marginTop: "6px" }}>
                        <div className="profileFriend"></div>
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "25px",
                                marginLeft: "15px",
                            }}
                        >
                            {selectedUser.name}
                        </p>
                    </div>

                    <div className="chatBody">
                        <div className="chatMain">{render_messages()}</div>
                    </div>

                    <form
                        className="sendMessageDiv"
                        onSubmit={handleSendMessage}
                    >
                        <input
                            className="sendMessageInpt"
                            placeholder="Digite uma mensagem..."
                            name="conteudo"
                            value={conteudo_mensagem}
                            onChange={(e) => {
                                setConteudo_mensagem(e.currentTarget.value);
                            }}
                            onDragEnter={() => {
                                handleSendMessage();
                                setConteudo_mensagem("");
                            }}
                        />
                        <button type="submit" className="sendBtn">
                            Enviar
                        </button>
                    </form>
                </div>
            )}

            {selectedUser.name == "" && (
                <div className="warnMsgs">
                    <p>
                        {" "}
                        {
                            "<- Verifique as sidebars para acessar amigos e comunidades ->"
                        }
                    </p>
                    <p> ( ˘︹˘ ) </p>
                </div>
            )}
        </div>
    );
}
