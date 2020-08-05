import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastTime from "./WeatherForecastTime";

export default function WeatherForecastPreview(props) {
  function getCelsiusTemperature() {
    let celsiusTemperature = Math.round(props.data.main.temp);
    return `${celsiusTemperature}°C`;
  }

  return (
    <div className="ForecastCelsiusPreview col">
      <WeatherForecastTime time={props.data.dt} />

      <br />
      <WeatherIcon code={props.data.weather[0].icon} />
      <br />
      {getCelsiusTemperature()}
    </div>
  );
}
