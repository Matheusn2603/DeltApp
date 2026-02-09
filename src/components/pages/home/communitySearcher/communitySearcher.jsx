import "./communitySearcher.css";
import Comm from "../comm/comm";
import { host_backend } from "../../../../config/config";

export default function CommunitySearcher() {
    function render_comms() {
        fetch(host_backend + "/comunidade/get_all")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    return (
        <div className="communitySearcher">
            <div className="serachAndComs">
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
                <Comm />
            </div>
        </div>
    );
}
