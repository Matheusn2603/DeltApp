import "./friendUser.css";

export default function FriendUser({ name, login, id_amizade, onSelect }) {
    return (
        <div>
            <button
                className="friendUser"
                onClick={() => {
                    onSelect({ name, login, id_amizade });
                }}
            >
                {" "}
                {name}{" "}
            </button>

            <p style={{ marginLeft: "10px" }}> ID: 123</p>
        </div>
    );
}
