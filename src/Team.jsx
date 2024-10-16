import { useState } from 'react'
import './App.css'

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam)
    }

    return (
        <div className='counter'>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

