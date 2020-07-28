import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
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
    <div>
      <h1> Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Search a city.."
          onChange={updateCity}
        />
        <input type="Submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <br />
        <h2>{city}</h2>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C </li>
          <li> Description: {weather.description}</li>
          <li> Wind: {weather.wind} km/h</li>
          <li> Humidity: {weather.humidity}%</li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather Icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
