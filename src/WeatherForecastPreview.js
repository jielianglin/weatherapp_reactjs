import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function getDate() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function getTemperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }
  return (
    <div className="WeatherForecastPreview col">
      {getDate()}
      <br />
      <WeatherIcon />
      <br />
      {getTemperature()}
    </div>
  );
}
