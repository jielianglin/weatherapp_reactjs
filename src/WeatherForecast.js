import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        10:00
        {Math.round(forecast.list[0].main.temp)}
        <img
          src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
          alt=""
        />
      </div>
    );
  } else {
    let apiKey = "fa0c9f80c461fd9a23378c08029da98c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
