import './notif.css';

export default function Notification(){
    return (
        <div className="notfMainDiv">
            <div className="notfIcon"></div>
            <div className="notfBody">
                <p style={{marginTop: '30px', fontWeight: 'bold'}}> Solicitação de Amizade de Usuario01 </p>
            </div>
            <button className='aceptBtn' style={{fontWeight: 'bold', fontSize: 20}}> ✓ </button>
            <button className='deleteBtn' style={{fontWeight: 'bold', fontSize: 20}}> X </button>
        </div>
    );
}