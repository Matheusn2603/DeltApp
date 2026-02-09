import "./comSideBar.css";
import { useState } from "react";

import ComUser from "../comUser/comUser";
import comP from "../../../../assets/comP.png";
import { useNavigate } from "react-router-dom";

import sideRight from "../../../../assets/svgs/sideRight.svg";

export default function ComSideBar({
    selectName,
    openCreateComm,
    openCreateTopico,
}) {
    const [openSideBar, setOpenSideBar] = useState("closed");
    const navigate = useNavigate();

    return (
        <div className={`comSideBar ${openSideBar}`}>
            <button
                className="pushComSideBarBtn"
                onClick={() => {
                    if (openSideBar == "closed") {
                        setOpenSideBar("opened");
                    } else {
                        setOpenSideBar("closed");
                    }
                }}
            >
                <img src={sideRight} style={{ height: "30px" }} />{" "}
            </button>

            <div className="comSdBarHeader">
                <p
                    style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        marginLeft: "15px",
                    }}
                >
                    {" "}
                    Minhas Comunidades
                </p>
                <button className="createCom" onClick={openCreateComm}>
                    + Criar uma comunidade
                </button>
                <button
                    className="createTopicoButton"
                    onClick={openCreateTopico}
                >
                    + Criar Tópico
                </button>
            </div>

            <div className="comFriendsDiv">
                {/* <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/>
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
                <ComUser name={"Jogos Eletrônicos"} onSelect={selectName}/> */}
                <img src={comP} alt="" />
                <button
                    className="exploreBtn"
                    onClick={() => {
                        navigate("/myComms");
                    }}
                >
                    {" "}
                    Explorar{" "}
                </button>
            </div>
        </div>
    );
}
