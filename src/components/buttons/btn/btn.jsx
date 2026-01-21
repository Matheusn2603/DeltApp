import './btn.css';

export default function Btn({title, onClick, className, ...props}){
    return (
        <button onClick={onClick} {...props} className={`btn ${className}`}> {title} </button>
    );
}