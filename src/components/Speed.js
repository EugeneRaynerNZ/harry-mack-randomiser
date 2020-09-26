import React, {useState} from 'react'


export default function Speed() {

    const [speed, updateSpeed] = useState(120)

    const increaseSpeed = (e) => {
        console.log(e.target.value)
        return updateSpeed(speed + 1)
    }

    const decreaseSpeed = (e) => {
        console.log(e.target.value)
        return updateSpeed(speed - 1)
    }

    return (
        <div className="speed">
            <p className="speed--container-title">Speed</p>
            <div className="speed--container">
                
                <button className="speedButton" onClick={decreaseSpeed}>-</button>
                <p>{speed} wpm</p>
                <button className="speedButton" onClick={increaseSpeed}>+</button>
            </div>
        </div>
    )
}