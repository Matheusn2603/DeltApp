import './btn.css';

export default function Btn({title, className}){
    return (
        <input type="submit" className={`btn ${className}`} value={title}/>
    );
}