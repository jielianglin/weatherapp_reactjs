import React from "react";

export default function WeatherIcon(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.code}@2x.png`;
  return <img src={iconUrl} alt={props.alt} />;
}
