import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

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
      icon: response.data.weather[0].icon,
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
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Search a city.."
              className="search-input"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <br />
        <WeatherInfo data={weather} />

        <hr />
        <WeatherForecast city={weather.city} />
      </div>
    );
  } else {
    return form;
  }
}
