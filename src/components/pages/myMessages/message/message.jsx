import './message.css';

<<<<<<< HEAD
export default function Message({type, text}){
    //type pode ser me ou other

    return(
        <div className={`messageDiv ${type}`}>
            <p>
               {text}
            </p>
=======
export default function Message({type}){
    return(
        <div>

>>>>>>> 9084489025b4d2c61d3d5c904f8b2a4189c7a63e
        </div>
    );
}