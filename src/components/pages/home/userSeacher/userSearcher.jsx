import "./userSearcher.css";
import User from "../user/user";
import { host_backend } from "../../../../config/config";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function UserSearcher() {
    const [usuarios, setUsuarios] = useState([]);
    const usuario = jwtDecode(JSON.parse(localStorage.getItem("token")).token);

    useEffect(() => {
        fetch(
            host_backend +
                "/amizade/get_all_user_not_amizades/" +
                usuario.login,
            {
                "Content-Type": "application/json",
            },
        )
            .then((res) => res.json())
            .then((data) => {
                setUsuarios(data.results);
            });
    });

    function render_users() {
        return usuarios.map((el) => (
            <User
                userName={el.nome_usuario}
                amigo={el.login}
                usuario={usuario.login}
                key={el.login}
            />
        ));
    }

    return (
        <div className="userSearcher">
            <div className="serachAndusers">{render_users()}</div>
        </div>
    );
}
