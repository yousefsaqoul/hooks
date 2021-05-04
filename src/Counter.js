import React, { useState } from 'react'
import { Backpack, Planet } from 'react-kawaii'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState(true)
    const [mood, setMood] = useState(true)
    const [moodPlanet, setMoodPlanet] = useState(true)
    return (
        <div style={{ backgroundColor: bgColor ? '#333' : '#dddd' }}>

            <button onClick={() => setBgColor(!bgColor)}>Change bg color</button>

            <h1 style={{ color: bgColor ? '#ddd' : '#333' }}>{count}</h1>

            <button onClick={() => setCount(count + 1)}>count +1</button>

            <button onClick={() => setCount(count - 1)} >count -1</button>


            <Backpack size={320} mood={mood ? 'excited' : 'sad'} color="#FFD882" />
            <button onClick={() => setMood(!mood)}> change mode Backpack</button>


            <Planet size={220} mood={moodPlanet ? 'excited' : 'sad'} color="#ddee45" />
            <button onClick={() => setMoodPlanet(!moodPlanet)}> change mode Planet</button>
        </div >
    )
}

export default Counter

