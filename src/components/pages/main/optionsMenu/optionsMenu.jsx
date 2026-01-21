import './optionsMenu.css';
import MainBtn from '../../../buttons/mainBtns/mainBtn';
import { useNavigate } from "react-router-dom";

export default function OptionsMenu(){
    const navigate = useNavigate();

    return (
        <div className="optMenus borderOpt">
            <MainBtn title={'Cadastrar'} 
                onClick={() => {
                    navigate("/cadastrar")
                }}
            />
            <MainBtn title={'Entrar'}
                onClick={() => {
                    navigate("/login")
                }}
            />
            <p style={{color: 'rgba(255, 255, 255, 0.25)', marginTop: 50}}> © Delta 2025</p>
        </div>
    )
}