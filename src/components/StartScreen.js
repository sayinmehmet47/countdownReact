import React from 'react'
import "../StartScreen.css"

export default function StartScreen(props) {
    return (
        <div className="body d-flex flex-column justify-content-center align-items-center">
            <h2>⏲GO!</h2>
            <button className="btn btn-info btn-lg" onClick={()=>props.startScreen(true)}>Click</button>
           
        </div>
    )
}
