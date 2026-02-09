import './createCommModal.css';
import commIco from '../../../../assets/svgs/community.svg'

export default function CreateCommModal({situation, onClose}){
    return (
        <div className={`modalCreateCommBg ${situation}`}>
            <div className="modalCreateComm">
                <div className="modalCommHeader">
                    <img src={commIco} style={{height: '50px'}} className='commIco'/>
                    <p style={{fontWeight: 900, fontSize: '20px'}}> Criar Comunidade</p>
                </div>
                <form className="modalCommBody">
                    <label>Nome:</label>
                    <input className="commNameInput" placeholder='Digite o nome da sua comunidade...'/>

                    <div className="checkModalComm">
                        <input
                            type="checkbox"
                            style={{
                                transform: 'scale(1.8)',
                                marginRight: '10px',
                                border: 'none'
                            }}
                        />

                        <p> Declaro que concordo e li os termos e condições </p>
                    </div>

                    <button className="createComm">
                        Criar
                    </button>

                    <button
                        className="exitModal"
                        onClick={() => {
                            onClose();
                        }}
                        type='button'
                    >
                        X
                    </button>
                </form>
            </div>
        </div>
    );
}