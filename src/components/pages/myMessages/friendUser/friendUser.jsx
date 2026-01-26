import './friendUser.css';

export default function FriendUser({name, onSelect}){
    return (
        <button className='friendUser'
            onClick={ () => {
                onSelect(name)
            }}
        > {name} </button>
    )
}