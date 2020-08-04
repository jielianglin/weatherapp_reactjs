import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Current">
        <h2 className="CurrentCity">{city}</h2>
        <FormattedDate date={weather.date} />
      </div>
      <br />

      <div className="row">
        <div className="Icon col-md-2">
          <img src={weather.icon} alt="Weather Icon" />{" "}
        </div>
        <div className="col-md-5">
          <WeatherTemperature celsius={weather.temperature} />
        </div>

        <div className="col-md-1" />
        <div className="col-md-4">
          <ul>
            <li>{weather.description}</li>
            <li>Wind: {weather.wind} km/h</li>
            <li>Humidity: {weather.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
