import './friendUser.css';

export default function FriendUser({name, onSelect}){
    return (
        <div>
            <button className='friendUser'
                onClick={ () => {
                    onSelect(name)
                }}
            > {name} </button>
            
            <p style={{marginLeft: '10px'}}> ID: 123</p>
        </div>
    )
}