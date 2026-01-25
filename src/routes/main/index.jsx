import "./index.css";

import { WelcomeLogo } from "../../components/pages/main/welcomeLogo/welcomeLogo";
import OptionsMenu from "../../components/pages/main/optionsMenu/optionsMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/home");
        }
    });

    return (
        <div className="body">
            <WelcomeLogo />
            <OptionsMenu />
        </div>
    );
}
