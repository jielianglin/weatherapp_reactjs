import React from "react";

export default function WeatherTemperature(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
    props.setUnits("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnits("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.units === "celsius") {
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
