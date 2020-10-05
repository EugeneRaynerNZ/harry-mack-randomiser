import React from 'react'


export default function Speed({bpm, setBpm, wpm}) {

    const decreaseBpm = (e) => {
        return setBpm(bpm - 1) 
    }

    const increaseBpm = (e) => {
        return setBpm(bpm + 1)
    }

    return (
        <div className="speed">
            <p className="speed--container-title">Speed - {wpm} Words Per Minute</p>
            <div className="speed--container">
                
                <button className="speedButton" onClick={decreaseBpm}>-</button>
                <p>{bpm} bpm</p>
                <button className="speedButton" onClick={increaseBpm}>+</button>
            </div>
        </div>
    )
}