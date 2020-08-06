import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);

  function getWeatherForecast(props) {
    setLoaded(props);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={props.city.list[0]} />
      </div>
    );
  } else {
    {
      getWeatherForecast();
    }
    return null;
  }
}
