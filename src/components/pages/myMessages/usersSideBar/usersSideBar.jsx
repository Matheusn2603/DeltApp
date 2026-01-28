import './usersSideBar.css';
import { useState } from 'react';

import FriendUser from '../friendUser/friendUser';

export default function UserSideBar({selectName}){
    const [openSideBar, setOpenSideBar] = useState('closed');

    return (
        <div className={`userSideBar ${openSideBar}`}>
            <button className="pushUserSideBarBtn"
                onClick={() => {
                    if(openSideBar == 'closed'){
                        setOpenSideBar('opened');
                    }else{
                        setOpenSideBar('closed');
                    }
                }}
            > {'<'} </button>

            <div className="userSdBarHeader">
                <p style={{fontWeight: 'bold', fontSize: '25px', marginLeft: '15px'}}> Amigos Adicionados</p>
            </div>

            <div className="userFriendsDiv">
                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
                                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
                                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
                                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
                                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
                                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
                                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
                                <FriendUser name={"Sla 123"} onSelect={selectName}/>
                <FriendUser name={"OpanCanastar"} onSelect={selectName}/>
            </div>
        </div>
    );
}