import React from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast row">
      <WeatherForecastPreview data={props.city[0]} units={props.units} />
      <WeatherForecastPreview data={props.city[1]} units={props.units} />
      <WeatherForecastPreview data={props.city[2]} units={props.units} />
      <WeatherForecastPreview data={props.city[3]} units={props.units} />
      <WeatherForecastPreview data={props.city[4]} units={props.units} />
      <WeatherForecastPreview data={props.city[5]} units={props.units} />
    </div>
  );
}
