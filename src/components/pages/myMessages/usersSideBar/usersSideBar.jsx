import "./usersSideBar.css";
import { useEffect, useState } from "react";

import FriendUser from "../friendUser/friendUser";
import { host_backend } from "../../../../config/config";
import { jwtDecode } from "jwt-decode";

export default function UserSideBar({ selectName }) {
    const [openSideBar, setOpenSideBar] = useState("closed");
    const usuario = jwtDecode(JSON.parse(localStorage.getItem("token")).token);
    const [amigos, setAmigos] = useState([]);

    useEffect(() => {
        fetch(
            host_backend + "/amizade/get_all_user_amizades/" + usuario.login,
            {
                "Content-Type": "application/json",
            },
        )
            .then((res) => res.json())
            .then((data) => {
                setAmigos(data.results);
            });
    }, []);

    function render_amigos() {
        return amigos.map((amigo) => (
            <FriendUser
                name={amigo.nome_usuario}
                login={amigo.login}
                onSelect={selectName}
                key={amigo.login}
            />
        ));
    }

    return (
        <div className={`userSideBar ${openSideBar}`}>
            <button
                className="pushUserSideBarBtn"
                onClick={() => {
                    if (openSideBar == "closed") {
                        setOpenSideBar("opened");
                    } else {
                        setOpenSideBar("closed");
                    }
                }}
            >
                {" "}
                {"<"}{" "}
            </button>

            <div className="userSdBarHeader">
                <p
                    style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        marginLeft: "15px",
                    }}
                >
                    {" "}
                    Amigos Adicionados
                </p>
            </div>

            <div className="userFriendsDiv">{render_amigos()}</div>
        </div>
    );
}
