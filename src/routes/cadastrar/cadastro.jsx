import './cadastro.css';
import deltaIco from '../../assets/iconmini.png'

import InputLabel from '../../components/pages/cadastrar/inputLabels/inputLabel';
import Btn from '../../components/buttons/btn/btn';
import { Link } from "react-router-dom";

export default function Cadastro(){
    return (
        <div className="bodyCdtr">
            <div className="border cdtrDiv">
                <div className='headerCdtr'>
                    <img src={deltaIco} alt="sla" style={{height: "40px"}}/>
                    <h3 style={{fontWeight: 600}}> Cadastrar </h3>
                </div>
                <div className='mainCdtr'>
                    <InputLabel 
                        type={'text'} 
                        width='90%'
                        title={'Nome de Usuário'}
                        placeholder={'Digite o nome do seu perfil'}    
                    />
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
                <div className='footerCdtr'>
                    <Btn title={'Cadastrar'} className='btnctr'/>
                </div>
                <nav>
                    <Link to="/login" className='linkToLogin'>Já passou por aqui? Entre agora! </Link>
                </nav>
            </div>
        </div>
    );
}