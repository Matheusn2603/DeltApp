import './admtool.css';

import admToolIco from '../../assets/images/admTool.png';
import malwareIco from '../../assets/svgs/malwareIco.svg';
import userTool from '../../assets/svgs/user_tools.svg';
import commTool from '../../assets/svgs/comm_tool.svg'

export default function AdmTool(){

    const handlerDeleteUser = () => {
        window.confirm('Deseja banir esse usuário para sempre?');

        //se for sim. delete
    }

    const handlerDeleteComm = () => {
        window.confirm('Deseja excluir essa comunidade para sempre?');
    }

    return (
        <div className="admToolBody">
            <div className="admToolHeader">
                <div className="iconTitleAdm">
                    <img src={admToolIco} style={{height: '60px'}} />
                    <p> Delta Tools </p>
                </div>
            </div>

            <div className="toolsmain">
                <div className='tools'>
                    <div className="slotsDiv">
                        <div className="slotTool">
                            <p className='toolText'> Ferramentas de Usuário </p>
                            <select className='idSlc'>
                                <option> Selecione o ID </option>
                                <option> 1 </option>
                                <option> 2 </option>
                            </select>
                            
                            <div className="toolsBtnsDiv">
                                <button 
                                    className='saveBtn'
                                > Salvar </button>
                                <button 
                                    className='BanBtn'
                                    onClick={handlerDeleteUser}
                                > Banir </button>
                            </div>

                            <div className="infoUserTool">
                                <input type="text" className="userNameInp" placeholder='Nome de Usuario'/>
                                <div className='infoUserLabel'>
                                    <p> Amigos: 0</p>
                                    <p> Notificações: 0</p>
                                    <p> Comunidades criadas: 0</p>
                                    <p> Comunidades Entradas: 0</p>
                                </div>
                            </div>
                        </div>

                        <div className="slotTool">
                            <p className='toolText'> Ferramentas de Comunidade </p>

                            <select className='idSlc'>
                                <option> Selecione o ID </option>
                                <option> 1 </option>
                                <option> 2 </option>
                            </select>
                            
                            <div className="toolsBtnsDiv">
                                <button className='saveBtn'> Salvar </button>
                                <button 
                                    className='BanBtn'
                                    onClick={handlerDeleteComm}
                                > Excluir </button>
                            </div>

                            <div className="infoCommTool">
                                <input type="text" className="commNameInp" placeholder='Nome da comunidade'/>
                                <p> Membros: 0</p>
                            </div>
                        </div>
                    </div>

                    <div className="banRules">
                        <img src={malwareIco} style={{height: '100px'}}/>
                        <p> Segue regras importantes para o banimento de determinado usuário.
                            Evite banimentos e alterações desnecessários.
                        </p>
                        <ol>
                            <li> Venda de contas </li>
                            <li> Flood ou Spam em chats </li>
                            <li> Mandar conteúdos +18 </li>
                            <li> Agredir verbalmente usuários </li>
                            <li> Nomes de usuário/comunidade de caráter duvidoso </li>
                            <li> Fazer perguntas bestas durante a apresentação </li>                    
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}