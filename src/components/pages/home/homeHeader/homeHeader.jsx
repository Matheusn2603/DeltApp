import "./homeHeader.css";
import deltaIco from "../../../../assets/iconmini.png";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function HomeHeader({ openModalNotf, openModalUser }) {
    const navigate = useNavigate();
    const usuario = jwtDecode(JSON.parse(localStorage.getItem("token")).token);

    const render_adminTools = () => {
        if (usuario.cargo == "Admin") {
            return (
                <button
                    className="navBtn admTools"
                    onClick={() => {
                        navigate("/admTools");
                    }}
                ></button>
            );
        }
    };

    return (
        <div className="homeHeader">
            <div className="homeHeaderLogo">
                <img
                    src={deltaIco}
                    alt="logoDelta"
                    style={{ height: "30px" }}
                />
                <h2 style={{ fontWeight: "bold" }}> DeltApp </h2>
            </div>

            <div className="navHome">
                <button
                    className="navBtn notfs"
                    onClick={() => {
                        openModalNotf();
                    }}
                ></button>
                <button
                    className="navBtn msgs"
                    onClick={() => {
                        navigate("/myMessages");
                    }}
                ></button>
                <button
                    className="navBtn prof"
                    onClick={() => {
                        openModalUser();
                    }}
                ></button>
                {render_adminTools()}
            </div>
        </div>
    );
}
