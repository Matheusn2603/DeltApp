import "./user.css";
import userIco from "../../../../assets/svgs/user.svg";
import { host_backend } from "../../../../config/config";

export default function User({ userName, amigo, usuario }) {
    function request_friendship() {
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
        });
    }

    return (
        <div className="aUser">
            <div className="userImg">
                <img src={userIco} alt="userIcon" style={{ height: 40 }} />
            </div>
            <p style={{ fontWeight: 700 }}> {userName} </p>
            <p>{amigo}</p>
            <button className="addFriend" onClick={request_friendship}>
                +
            </button>
        </div>
    );
}
