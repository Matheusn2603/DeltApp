import './message.css';

export default function Message({type, text}){
    //type pode ser me ou other

    return(
        <div className={`messageDiv ${type}`}>
            <p>
               {text}
            </p>
        </div>
    )
}