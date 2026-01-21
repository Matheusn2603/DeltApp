import './comm.css';
import commIco from '../../../../assets/svgs/community.svg';

export default function Comm(){
    return (
        <div className="comm">
            <div className="commImg">
                <img src={commIco} alt="commIcon" style={{height: 40}}/>
            </div>
            <p style={{fontWeight: 700}}>Jogos Eletrônicos</p>
            <p>ID: 1</p>
            <button className="enterComm"> Entrar </button>
        </div>
    );
}