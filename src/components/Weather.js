import React from "react";

const Weather = props => (
  <div>
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temparture && <p>Temparture: {props.temparture}</p>}
    {props.humidity && <p>Humidty: {props.humidity}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
