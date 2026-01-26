import './myMessages.css';
<<<<<<< HEAD
import Message from '../../components/pages/myMessages/message/message';
import UserSideBar from '../../components/pages/myMessages/usersSideBar/usersSideBar.jsx';

import { useState } from 'react';

export default function MyMessages() {
    const [selectedUserName, setSelectedUserName] = useState('');

    function handleSendMessage(e) {
        e.preventDefault();
    }

    return (
        <div className="bodyMessages">
            <UserSideBar selectName={setSelectedUserName} />

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

            {selectedUserName == '' &&(
                <div className='warnMsgs'>
                    <p> {'<- Verifique as sidebars para acessar amigos e comunidades ->'}</p>
                </div>
            )}
=======

export default function MyMessages(){
    return (
        <div className="bodyMessages">
            <div className="chatDiv">
                <div className="chatHeader">
                    <div className="profileFriend"></div>
                    <p style={{fontWeight: 'bold', fontSize: '25px', marginLeft: '15px'}}> Usuario 2</p>
                </div>

                <div className="chatBody">
                    <div className="chatMain">

                    </div>
                </div>

                <form className='sendMessageDiv'>
                    <input className="sendMessageInpt" placeholder='Digite uma mensagem...'/>
                    <button className="sendBtn"> Enviar </button>
                </form>
            </div>
>>>>>>> 9084489025b4d2c61d3d5c904f8b2a4189c7a63e
        </div>
    );
}