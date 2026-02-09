import "./communitySearcher.css";
import Comm from "../comm/comm";
import { host_backend } from "../../../../config/config";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function CommunitySearcher() {
    const usuario = jwtDecode(JSON.parse(localStorage.getItem("token")).token);
    const [comunidades, setComunidades] = useState([]);

    useState(() => {
        fetch(
            host_backend +
                "/comunidade/get_all_user_not_comunidades/" +
                usuario.login,
            {
                "Content-Type": "application/json",
            },
        )
            .then((res) => res.json())
            .then((data) => {
                setComunidades(data.results);
            });
    }, []);

    function render_comunidades() {
        return comunidades.map((comunidade) => {
            return (
                <Comm
                    nome={comunidade.nome_comunidade}
                    topico={comunidade.nome_topico}
                    id={comunidade.id_comunidade}
                    login_usuario={usuario.login}
                    key={comunidade.id}
                />
            );
        });
    }

    return (
        <div className="communitySearcher">
            <div className="serachAndComs">{render_comunidades()}</div>
        </div>
    );
}
