import React from "react";

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
      <img
        src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
        alt=""
      />
      {getTemperature()}
    </div>
  );
}
