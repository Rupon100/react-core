
import { useState } from "react"
import './App.css'

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const haldleReduce = () => {
        if(count > 0){
            const newCount = count -1;
            setCount(newCount)
        } 
    }

    return (
        <div className="counter">
            <h3>Counter: {count}</h3>
            <div className="btnContainer">
               <button onClick={handleAdd}>Add</button>
               <button onClick={haldleReduce}>Reduce</button>
            </div>
        </div>
    )
}

