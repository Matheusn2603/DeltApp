import './myComms.css';
import commIco from '../../assets/svgs/community.svg';
import ComUser from '../../components/pages/myMessages/comUser/comUser';
import { use, useState } from 'react';

import sideLeft from '../../assets/svgs/sideLeft.svg';

function corRGBAleatoria(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

export default function MyComms(){
    const [commName, setCommName] = useState('Comunidade do DeltAPP');
    const [openSideBarComm, setOpenSideBarComm] = useState('closed');

    return (
        <div className="mainComm">
            <div className="commChatDiv">
                <div className="commHeader">
                    <img src={commIco} style={{height: '40px'}}/>
                    <p style={{fontWeight: 900}}> {commName} </p>
                </div>

                <div className="commChat">
                    <div className="chatGeral">
                        <p className='chatMsg'> <span style={{color: 'red'}}>
                            Equipe do Delta:</span> Olá! Esta é aba de comunidade.
                            seja respeitoso e mantenha a ordem para um ambiente saudável. Atenciosamento, Equipe do Delta :)
                            
                        </p>


                        {/* <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>
                        <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>
                        <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>
                        <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>
                        <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>
                        <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>
                        <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>
                        <p className='chatMsg'> <span style={{color: corRGBAleatoria()}}> Tutu: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut atque consectetur animi sint aperiam dolor illo consequatur aliquam labore. Sapiente esse, aut reiciendis debitis fugit adipisci quibusdam officiis quasi?</p>*/}
                    </div>
                    <div className="messageSend">
                        <input className='inputSend' placeholder='Enviar mensagem...'/>
                        <button type="submit" className="sendBtnComm">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>

                <div className={`comms ${openSideBarComm}`}>        
                    <div className="comSdBarHeader header2">
                        <p style={{fontWeight: 'bold', fontSize: '25px', marginLeft: '15px'}}> Minhas Comunidades</p>
                    </div>

                    <div className="comFriendsDiv">
                        <ComUser name={"Comunidade do DeltAPP"} onSelect={setCommName}/> {/* padrão ao inciar a pagina, se quiser colocar ela no banco ta show */}
                        <ComUser name={"Jogos Eletrônicos"} onSelect={setCommName}/>

                        <button
                            className="pushCommSideBarBtn"
                            onClick={() => {
                                if (openSideBarComm == "closed") {
                                    setOpenSideBarComm("opened");
                                } else {
                                    setOpenSideBarComm("closed");
                                }
                            }}
                        >
                            <img src={sideLeft} style={{height: '30px'}}/>
                        </button>
                    </div>
                </div>
        </div>
    );
}