import React, { useState, useEffect } from 'react'

const Buttons = () => {
    const [button, setButton] = useState("startButton");
    const [light, setLight] = useState("red selected");

    useEffect(() => {
        let intervalId;

        if (button === "start") {
            intervalId = setInterval(() => {
                if (light === "red") {
                    setLight("yellow");
                } else if (light === "yellow") {
                    setLight("green")
                } else if (light === "green") {
                    setLight("red");
                }
            }, 2000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [button, light]);

    return (
        <div className="buttonsContainer">
            <button className="startButton" onClick={() => setButton("start")}>Start</button>
            <button className="stopButton" onClick={() => setButton("stop")}>Stop</button>
            <button className="addColorButton" onClick={() => setButton("addColorButton")}>Add Color</button>
        </div>
    )
}

export default Buttons