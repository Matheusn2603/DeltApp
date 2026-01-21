import './homeHeader.css';
import deltaIco from '../../../../assets/iconmini.png';

export default function HomeHeader({openModalNotf, openModalUser}){
    return (
        <div className="homeHeader">
            <div className="homeHeaderLogo">
                <img src={deltaIco} alt="logoDelta" style={{height: '30px'}}/>
                <h2 style={{fontWeight: 'bold'}}> DeltApp </h2>
            </div>

            <div className="navHome">
                <button className='navBtn notfs'
                    onClick={
                        () => {
                            openModalNotf()
                        }
                    }
                ></button>
                <button className='navBtn msgs'></button>
                <button 
                    className='navBtn prof'
                    onClick={
                        () => {
                            openModalUser()
                        }
                    }
                ></button>
            </div>
        </div>
    );
}