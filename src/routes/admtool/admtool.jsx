import "./admtool.css";

import admToolIco from "../../assets/images/admTool.png";
import malwareIco from "../../assets/svgs/malwareIco.svg";
import userTool from "../../assets/svgs/user_tools.svg";
import commTool from "../../assets/svgs/comm_tool.svg";
import { host_backend } from "../../config/config";
import { useEffect, useState } from "react";

export default function AdmTool() {
    const userToken = JSON.parse(localStorage.getItem("token")).token;
    const [selectedLogin, setSelectedLogin] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [comunidades, setComunidades] = useState([]);

    console.log(userToken);
    useEffect(() => {
        fetch(host_backend + "/usuario/get_all")
            .then((res) => res.json())
            .then((data) => {
                setUsuarios(data.results);
            });

        fetch(host_backend + "/comunidade/get_all")
            .then((res) => res.json())
            .then((data) => {
                setComunidades(data.results);
            });
    }, []);

    const handlerDeleteUser = () => {
        const confirm = window
            .confirm("Deseja banir esse usuário para sempre?")
            .valueOf();

        if (confirm) {
            fetch(host_backend + "/usuario/delete/" + selectedLogin, {
                method: "DELETE",
                headers: {
                    Authorization: userToken,
                },
            })
                .then((res) => {
                    if (res.status === 401) {
                        alert("Acesso negado!");
                    } else {
                        alert("BANIDO!");

                        fetch(host_backend + "/usuario/get_all")
                            .then((res) => res.json())
                            .then((data) => {
                                setComunidades(data.results);
                            });
                    }
                })
                .catch(() => {
                    alert("Houve um erro ao banir usuário!");
                });
        }
    };

    const handlerDeleteComm = () => {
        const confirm = window
            .confirm("Deseja excluir essa comunidade para sempre?")
            .valueOf();

        if (confirm) {
            fetch(host_backend + "/comunidade/delete/" + selectedId, {
                method: "DELETE",
                headers: {
                    Authorization: userToken,
                },
            })
                .then((res) => {
                    if (res.status === 401) {
                        alert("Acesso negado!");
                    } else {
                        alert("Sucesso remover comunidade!");

                        fetch(host_backend + "/comunidade/get_all")
                            .then((res) => res.json())
                            .then((data) => {
                                setComunidades(data.results);
                            });
                    }
                })
                .catch(() => {
                    alert("Houve um erro ao remover comunidade!");
                });
        }
    };

    const handleSaveUser = () => {
        const usuario_nome = document.getElementById("nome_usuario");
        const usuario = { nome_usuario: usuario_nome.value };

        fetch(
            host_backend + "/usuario/update_name_restricted/" + selectedLogin,
            {
                method: "PUT",
                body: JSON.stringify(usuario),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: userToken,
                },
            },
        )
            .then((res) => {
                if (res.status === 401) {
                    alert("Acesso negado!");
                } else {
                    alert("Sucesso ao alterar usuário");
                }
            })
            .catch(() => {
                alert("Houve um erro ao alterar nome de usuário!");
            });
    };

    const handleSaveComunidade = () => {
        const comunidade_nome = document.getElementById("nome_comunidade");
        const comunidade = { nome_comunidade: comunidade_nome.value };

        fetch(host_backend + "/comunidade/update_name/" + selectedId, {
            method: "PUT",
            body: JSON.stringify(comunidade),
            headers: {
                "Content-Type": "application/json",
                Authorization: userToken,
            },
        })
            .then((res) => {
                if (res.status === 401) {
                    alert("Acesso negado!");
                } else {
                    alert("Sucesso ao alterar comunidade!");
                }
            })
            .catch(() => {
                alert("Houve um erro ao alterar nome de comunidade!");
            });
    };

    function render_usuarios() {
        return usuarios.map((usuario) => {
            return (
                <option value={usuario.login} key={usuario.login}>
                    {usuario.login}
                </option>
            );
        });
    }

    function render_comunidades() {
        return comunidades.map((comunidade) => {
            return (
                <option
                    value={comunidade.id_comunidade}
                    key={comunidade.id_comunidade}
                >
                    {comunidade.id_comunidade}
                </option>
            );
        });
    }

    return (
        <div className="admToolBody">
            <div className="admToolHeader">
                <div className="iconTitleAdm">
                    <img src={admToolIco} style={{ height: "60px" }} />
                    <p> Delta Tools </p>
                </div>
            </div>

            <div className="toolsmain">
                <div className="tools">
                    <div className="slotsDiv">
                        <div className="slotTool">
                            <p className="toolText"> Ferramentas de Usuário </p>
                            <select
                                className="idSlc"
                                onChange={(e) => {
                                    setSelectedLogin(e.currentTarget.value);
                                }}
                            >
                                <option> Selecione o Login </option>
                                {render_usuarios()}
                            </select>

                            <div className="toolsBtnsDiv">
                                <button
                                    className="saveBtn"
                                    onClick={handleSaveUser}
                                >
                                    {" "}
                                    Salvar{" "}
                                </button>
                                <button
                                    className="BanBtn"
                                    onClick={handlerDeleteUser}
                                >
                                    Banir
                                </button>
                            </div>

                            <div className="infoUserTool">
                                <input
                                    type="text"
                                    className="userNameInp"
                                    placeholder="Nome de Usuario"
                                    id="nome_usuario"
                                />
                            </div>
                        </div>

                        <div className="slotTool">
                            <p className="toolText">
                                {" "}
                                Ferramentas de Comunidade{" "}
                            </p>

                            <select
                                className="idSlc"
                                onChange={(e) => {
                                    setSelectedId(e.currentTarget.value);
                                }}
                            >
                                <option> Selecione o ID </option>
                                {render_comunidades()}
                            </select>

                            <div className="toolsBtnsDiv">
                                <button
                                    className="saveBtn"
                                    onClick={handleSaveComunidade}
                                >
                                    {" "}
                                    Salvar{" "}
                                </button>
                                <button
                                    className="BanBtn"
                                    onClick={handlerDeleteComm}
                                >
                                    {" "}
                                    Excluir{" "}
                                </button>
                            </div>

                            <div className="infoCommTool">
                                <input
                                    type="text"
                                    className="commNameInp"
                                    placeholder="Nome da comunidade"
                                    id="nome_comunidade"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="banRules">
                        <img src={malwareIco} style={{ height: "100px" }} />
                        <p>
                            {" "}
                            Segue regras importantes para o banimento de
                            determinado usuário. Evite banimentos e alterações
                            desnecessários.
                        </p>
                        <ol>
                            <li> Venda de contas </li>
                            <li> Flood ou Spam em chats </li>
                            <li> Mandar conteúdos +18 </li>
                            <li> Agredir verbalmente usuários </li>
                            <li>
                                {" "}
                                Nomes de usuário/comunidade de caráter
                                duvidoso{" "}
                            </li>
                            <li>
                                {" "}
                                Fazer perguntas bestas durante a
                                apresentação{" "}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
