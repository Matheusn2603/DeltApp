import "./home.css";
import HomeHeader from "../../components/pages/home/homeHeader/homeHeader";
import HomeBody from "../../components/pages/home/homeBody/homeBody";
import HomeFooter from "../../components/pages/home/homeFooter/homeFooter";

import ModalNot from "../../components/pages/home/modalNot/modalNot";
import ModalUser from "../../components/pages/home/modalUser/modalUser";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Home() {
    const [visible, setVisible] = useState("hidden");
    const [visibleUM, setVisibleUM] = useState("hidden");
    let usuario;

    useEffect(() => {
        if (localStorage.getItem("token")) {
            usuario = jwtDecode(
                JSON.parse(localStorage.getItem("token")).token,
            );
        }
    });

    const openModalNotHandle = () => {
        setVisible("visible");
    };

    const closeModalNotHandle = () => {
        setVisible("hidden");
    };

    const openModalUserHandle = () => {
        setVisibleUM("visible");
    };

    const closeModalUserHandle = () => {
        setVisibleUM("hidden");
    };

    return (
        <div className="mainHomeDiv">
            <ModalNot visible={visible} closeModal={closeModalNotHandle} />
            <ModalUser visible={visibleUM} onClose={closeModalUserHandle} />
            <HomeHeader
                openModalNotf={openModalNotHandle}
                openModalUser={openModalUserHandle}
            />
            <HomeBody />
            <HomeFooter />
        </div>
    );
}
