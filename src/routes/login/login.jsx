import './login.css';
import deltaIco from '../../assets/iconmini.png'

import InputLabel from '../../components/pages/cadastrar/inputLabels/inputLabel';
import Btn from '../../components/buttons/btn/btn';
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <div className="bodyLgn">
            <div className="border lgnDiv">
                <div className='headerLgn'>
                    <img src={deltaIco} alt="sla" style={{height: "40px"}}/>
                    <h3 style={{fontWeight: 600}}> Entrar </h3>
                </div>
                <div className='mainLgn'>
                    <InputLabel type={'text'} 
                        width={'90%'}
                        title={'Login'}
                        placeholder={'Digite seu Login'}    
                    />

                    <InputLabel type={'password'} 
                        width={'90%'}
                        title={'Senha'}
                        placeholder={'Digite sua senha (chave de acesso)'}
                        maxLength={8} 
                    />
                </div>
                <div className='footerLgn'>
                    <Btn title={'Entrar'} className='btnlgn'/>
                </div>
                <nav>
                    <Link to="/cadastrar" className='linkToCdt'>Novo por aqui? Cadastre agora! </Link>
                </nav>
            </div>
        </div>
    );
}