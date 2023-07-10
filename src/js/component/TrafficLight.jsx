import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [light, setLight] = useState("red");
  const [button, setButton] = useState("start");
  const [showPurple, setShowPurple] = useState(true);

  useEffect(() => {
    let intervalId;

    if (button === "start") {
      intervalId = setInterval(() => {
        if (light === "red") {
          setLight("yellow");
        } else if (light === "yellow") {
          setLight("green");
        } else if (light === "green") {
          if (showPurple) {
            setLight("purple");
          } else {
            setLight("red");
          }
        } else if (light === "purple") {
          setLight("red");
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [button, light, showPurple]);

  const stopTrafficLight = () => {
    setButton("stop");
  };

  const togglePurple = () => {
    setShowPurple(!showPurple);
  };

  return (
    <div className="bigContainer">
      <div className="lightHolder"></div>
      <div className="trafficLightConatiner">
        <div className="lightContainer">
          <i
            className={`fa-solid fa-circle redLight ${light === "red" ? "selected" : ""}`}
            onClick={() => setLight("red")}
          ></i>
        </div>
        <div className="lightContainer">
          <i
            className={`fa-solid fa-circle yellowLight ${light === "yellow" ? "selected" : ""}`}
            onClick={() => setLight("yellow")}
          ></i>
        </div>
        <div className="lightContainer">
          <i
            className={`fa-solid fa-circle greenLight ${light === "green" ? "selected" : ""}`}
            onClick={() => setLight("green")}
          ></i>
        </div>
        {showPurple && (
          <div className="lightContainer">
            <i
              className={`fa-solid fa-circle purpleLight ${light === "purple" ? "selected" : ""}`}
              onClick={() => setLight("purple")}
            ></i>
          </div>
        )}
      </div>
      <div className="buttonsContainer">
        <button className="startButton" onClick={() => setButton("start")}>Start</button>
        <button className="stopButton" onClick={stopTrafficLight}>Stop</button>
        <button className="addColorButton" onClick={togglePurple}>
          {showPurple ? "Hide Purple" : "Show Purple"}
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
