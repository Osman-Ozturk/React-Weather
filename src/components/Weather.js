import React from "react";
import "./Weather.scss"
function Weather({weather , weatherData }) {
  return (
    <div className="Weather">
      <h2>{weatherData.location.name + " " + weatherData.location.country}</h2>
      <h2>{weather.date}</h2>
      <ul>
        <li>
          <img src={weather.day.condition.icon} alt="" />
        </li>
        <li>{weather.day.condition.text}</li>
        <li>{weather.day.maxtemp_c + "°C / " + weather.day.mintemp_c+ " °C"}</li>
      </ul>
    </div>
  );
}

export default Weather;
