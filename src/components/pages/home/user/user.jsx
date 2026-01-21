import './user.css';
import userIco from '../../../../assets/svgs/user.svg';

export default function User(){
    return (
        <div className="aUser">
            <div className="userImg">
                <img src={userIco} alt="userIcon" style={{height: 40}}/>
            </div>
            <p style={{fontWeight: 700}}> Usuario 121314 </p>
            <p>ID: 1</p>
            <button className="addFriend"> + </button>
        </div>
    );
}