import './modalUser.css';
import { useState } from 'react';

export default function ModalUser({onClose, visible}){
    const [usuario, setUsuario] = useState('Usuario121314');

    return (
        <div className={`modalUserBg ${visible}`}>
            <div className="modalUser">

                <button className='exitModal'
                    onClick={
                        () => {
                            onClose();
                        }
                    }
                > X </button>

                <div className="modalUserHeader">
                    <div className="userIco"></div>
                    <input 
                        type="text" 
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        className='modalUserInput'
                        maxLength={14}
                    />
                </div>

                <div className="modalUserBody">
                    <p style={{color: 'rgba(255, 255, 255, 0.311)'}}> ID: </p>
                    <button className="saveInfoBtn"> Salvar </button>
                </div>
            </div>
        </div>
    );
}