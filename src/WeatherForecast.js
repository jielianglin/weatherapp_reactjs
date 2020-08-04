import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          <WeatherForecastPreview data={forecast.list[0]} />
        </div>
        <div className="col">
          <WeatherForecastPreview data={forecast.list[1]} />
        </div>
        <div className="col">
          <WeatherForecastPreview data={forecast.list[2]} />
        </div>
        <div className="col">
          <WeatherForecastPreview data={forecast.list[3]} />
        </div>
        <div className="col">
          <WeatherForecastPreview data={forecast.list[4]} />
        </div>
        <div className="col">
          <WeatherForecastPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "fa0c9f80c461fd9a23378c08029da98c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
