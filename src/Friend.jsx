

export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div className='user-box'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}