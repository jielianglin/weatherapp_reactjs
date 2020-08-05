import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          {" "}
          <a href="/" className="active" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit())}</span>{" "}
        <span className="unit">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="active" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
