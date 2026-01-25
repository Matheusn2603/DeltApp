import "./modalUser.css";

export default function ModalUser({ onClose, visible, usuario = {} }) {
    return (
        <div className={`modalUserBg ${visible}`}>
            <div className="modalUser">
                <button
                    className="exitModal"
                    onClick={() => {
                        onClose();
                    }}
                >
                    X
                </button>

                <div className="modalUserHeader">
                    <div className="userIco"></div>
                    <input
                        type="text"
                        value={toString(usuario.nome_usuario)}
                        onChange={(e) => setUsuario(e.target.value)}
                        className="modalUserInput"
                        maxLength={14}
                    />
                </div>

                <div className="modalUserBody">
                    <p style={{ color: "rgba(255, 255, 255, 0.311)" }}> ID: </p>
                    <button className="saveInfoBtn"> Salvar </button>
                </div>
            </div>
        </div>
    );
}
