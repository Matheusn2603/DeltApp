import './myMessages.css';

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
        </div>
    );
}