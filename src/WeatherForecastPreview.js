import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastTime from "./WeatherForecastTime";

export default function WeatherForecastPreview(props) {
  const [unit, setUnit] = useState("celsius");

  let celsiusForecastTemperature = Math.round(props.data.main.temp);

  function getForecastCelsius() {
    return `${celsiusForecastTemperature}°C`;
  }

  function getForecastFahrenheit() {
    setUnit("fahrenheit");

    let fahrenheitForecastTemperature = Math.round(
      (celsiusForecastTemperature * 9) / 5 + 32
    );
    return `${fahrenheitForecastTemperature}°F`;
  }

  if (unit === "celsius") {
    return (
      <div className="ForecastCelsiusPreview col">
        <WeatherForecastTime time={props.data.dt} />
        <br />
        <WeatherIcon code={props.data.weather[0].icon} />
        <br />
        {getForecastCelsius()}
      </div>
    );
  } else {
    return (
      <div className="ForecastFahrenheitPreview col">
        <WeatherForecastTime time={props.data.dt} />
        <br />
        <WeatherIcon code={props.data.weather[0].icon} />
        <br />
        {getForecastFahrenheit()}
      </div>
    );
  }
}
