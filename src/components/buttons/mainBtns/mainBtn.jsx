import './mainBtn.css';

export default function MainBtn({title, onClick}){
    return (
        <button className='mainBtn' onClick={onClick}> {title} </button>
    );
}