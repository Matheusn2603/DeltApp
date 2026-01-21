import './welcomeLogo.css';
import deltaIco from '../../../../assets/iconmini.png';

export function WelcomeLogo(){
    return (
        <div className="border welcm">
            <img src={deltaIco} alt="sla" style={{height: "300px"}}/>
            <h1> BEM VINDO AO DELTA! </h1>
        </div>
    );
}