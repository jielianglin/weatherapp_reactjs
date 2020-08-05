import React from "react";

export default function WeatherForecastTime(props) {
  let date = new Date(props.time * 1000);
  let hours = date.getHours();
  return `${hours}:00`;
}
