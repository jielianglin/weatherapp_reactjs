import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherTemperature from "./WeatherTemperature";

export default function Search(props) {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "fa0c9f80c461fd9a23378c08029da98c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <div className="Form">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Search a city.."
            onChange={updateCity}
          />{" "}
          <input type="Submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <br />
        <div className="Current">
          <h2>{city}</h2>
          <FormattedDate date={weather.date} />
        </div>
        <div className="row">
          <div className="col-md-2">
            <img src={weather.icon} alt="Weather Icon" />{" "}
          </div>
          <div className="col-md-5">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-4">
          <ul>
            <li> Description: {weather.description}</li>
            <li> Wind: {weather.wind} km/h</li>
            <li> Humidity: {weather.humidity}%</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
