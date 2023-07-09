import React, { useState } from 'react';

const TrafficLight = () => {
  const [light, setLight] = useState("red");

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
      </div>
    </div>
  );
};

export default TrafficLight;
