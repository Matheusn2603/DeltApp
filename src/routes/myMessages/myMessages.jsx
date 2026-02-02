import './myMessages.css';
import Message from '../../components/pages/myMessages/message/message';
import UserSideBar from '../../components/pages/myMessages/usersSideBar/usersSideBar.jsx';

import { useState } from 'react';
import ComSideBar from '../../components/pages/myMessages/comSideBar/comSideBar.jsx';

export default function MyMessages(){
    const [selectedUserName, setSelectedUserName] = useState('');

    function handleSendMessage(e) {
        e.preventDefault();
    }

    return (
        <div className="bodyMessages">
            <UserSideBar selectName={setSelectedUserName} />
            <ComSideBar/>

            {selectedUserName !== '' && (
                <div className="chatDiv">
                    <div className="chatHeader" style={{ marginTop: '6px' }}>
                        <div className="profileFriend"></div>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', marginLeft: '15px' }}>
                            {selectedUserName}
                        </p>
                    </div>

                    <div className="chatBody">
                        <div className="chatMain">
                            <Message type="me" text="Oi" />
                            <Message type="other" text="Fala" />
                            <Message type="me" text="Nada nam" />
                            <Message type="other" text="Se lasque" />
                            <Message type="other" text="Block" />
                        </div>
                    </div>

                    <form className="sendMessageDiv" onSubmit={handleSendMessage}>
                        <input
                            className="sendMessageInpt"
                            placeholder="Digite uma mensagem..."
                        />
                        <button type="submit" className="sendBtn">
                            Enviar
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
