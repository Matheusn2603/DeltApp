import './comSideBar.css';
import { useState } from 'react';

import ComUser from '../comUser/comUser';

export default function ComSideBar({selectName}){
    const [openSideBar, setOpenSideBar] = useState('closed');

    return (
        <div className={`comSideBar ${openSideBar}`}>
            <button className="pushComSideBarBtn"
                onClick={() => {
                    if(openSideBar == 'closed'){
                        setOpenSideBar('opened');
                    }else{
                        setOpenSideBar('closed');
                    }
                }}
            > {'>'} </button>

            <div className="comSdBarHeader">
                <p style={{fontWeight: 'bold', fontSize: '25px', marginLeft: '15px'}}> Minhas Comunidades</p>
                <button className="createCom"> + Criar uma comunidade </button>
            </div>

            <div className="comFriendsDiv">
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
            </div>
        </div>
    );
}