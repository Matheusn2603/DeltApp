import "./friendUser.css";

export default function FriendUser({ name, login, onSelect }) {
    return (
        <div>
            <button
                className="friendUser"
                onClick={() => {
                    onSelect({ name, login });
                }}
            >
                {" "}
                {name}{" "}
            </button>

            <p style={{ marginLeft: "10px" }}> ID: 123</p>
        </div>
    );
}
