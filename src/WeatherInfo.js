import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Current">
        <h2 className="CurrentCity">{props.data.city}</h2>
        <FormattedDate date={props.data.date} />
      </div>
      <br />

      <div className="row">
        <div className="Icon col-md-2">
          <img src={props.data.icon} alt="Weather Icon" />
        </div>
        <div className="col-md-5">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-md-1" />
        <div className="col-md-4">
          <ul>
            <li>{props.data.description}</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
