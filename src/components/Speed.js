import React, {useState} from 'react'


export default function Speed({wpm, setWpm}) {

    const increaseWPM = (e) => {
        return setWpm(wpm + 1)
    }

    const decreaseWPM = (e) => {
        return setWpm(wpm - 1) 
    }

    return (
        <div className="speed">
            <p className="speed--container-title">Speed</p>
            <div className="speed--container">
                
                <button className="speedButton" onClick={decreaseWPM}>-</button>
                <p>{wpm} wpm</p>
                <button className="speedButton" onClick={increaseWPM}>+</button>
            </div>
        </div>
    )
}