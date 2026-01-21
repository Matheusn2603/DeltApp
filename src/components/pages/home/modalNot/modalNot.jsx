import './modalNot.css';

import Notification from '../notification/notif';

export default function ModalNot({visible, closeModal}){
    return (
        <div className={`modalnotbg ${visible}`}>
            <div className="modalnot">
                <button className='exitModal'
                    onClick={
                        () => {
                            closeModal();
                        }
                    }
                > X </button>

                <div className="modalNotHeader">
                    <p style={{fontWeight: 'bold', fontSize: '20px'}}> Notificações </p>
                </div>

                <div className="modalNotBody">
                    <div className="notNotifsForYou">
                        <p> X_X </p>
                        <p> Sem Notificações no momento</p>
                    </div>
                    {/* <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/> */}
                </div>
            </div>
        </div>
    );
}