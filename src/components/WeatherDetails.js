import React, { Fragment } from "react";

const WeatherDetails = props => (
  <Fragment>
    {console.log(props)}
    <h2>{`${props.city}, ${props.state}`}</h2>
    <p>Temperature: {props.temp}</p>
    <p>Rain: {props.rain}</p>
    <p>Clouds: {props.clouds}%</p>
    <p>Wind: {`${props.windSpeed}mph - ${props.windDirection}`}</p>
  </Fragment>
);

export default WeatherDetails;