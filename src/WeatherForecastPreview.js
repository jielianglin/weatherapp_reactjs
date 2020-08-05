import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastTime from "./WeatherForecastTime";

export default function WeatherForecastPreview(props) {
  const [unit, setUnit] = useState("celsius");

  let celsiusTemperature = Math.round(props.data.main.temp);

  function getCelsiusTemperature() {
    return `${celsiusTemperature}°C`;
  }

  function getFahrenheitTemperature() {
    setUnit("fahrenheit");
    let fahrenheitTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
    return `${fahrenheitTemperature}°F`;
  }

  if (unit === "celsius") {
    return (
      <div className="ForecastCelsiusPreview col">
        <WeatherForecastTime time={props.data.dt} />
        <br />
        <WeatherIcon code={props.data.weather[0].icon} />
        <br />
        {getCelsiusTemperature()}
      </div>
    );
  } else {
    return (
      <div className="ForecastFahrenheitPreview col">
        <WeatherForecastTime time={props.data.dt} />
        <br />
        <WeatherIcon code={props.data.weather[0].icon} />
        <br />
        {getFahrenheitTemperature()}
      </div>
    );
  }
}
