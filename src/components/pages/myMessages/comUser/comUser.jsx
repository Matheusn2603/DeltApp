import './comUser.css';

export default function ComUser({name, onSelect}){
    return (
        <button className='commUser'
            onClick={ () => {
                onSelect(name)
            }}
        > {name} </button>
    )
}