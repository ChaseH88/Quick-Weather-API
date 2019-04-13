import React, { Fragment } from "react";

const WeatherDetails = props => {

  // Convert to Fahrenheit
  function celsiusToFahrenheit(temp){
    let newTemp = Math.round(temp * (9/5) + 32);
    return newTemp;
  }

  // Check to see if it's raining
  function checkRain(rain){
    let message;
    rain === null ? message = "No Rain!" : message = "It's Raining!";
    return message;
  }

  // Check for Time of Day
  function timeOfDay(timeOfDay){
    let time;
    timeOfDay === "d" ? time = "day" : time = "night";
    return time;
  }

  // Render
  return(
    <Fragment>
      {console.log(props)}
      <div id="location" className={timeOfDay(props.timeOfDay)}>
        <div className="place">
          <h2>{`${props.city}, ${props.state}`}</h2>
        </div>
        <div className="temperature">
          <p>Temperature: {celsiusToFahrenheit(props.temp)}</p>
          <p>What it Feels Like: {celsiusToFahrenheit(props.feelsLike)}</p>
        </div>
        <div className="details">
          <p>Description: {props.description}</p>
          <p>Rain: {checkRain(props.rain)}</p>
          <p>Clouds: {props.clouds}%</p>
          <p>Wind: {`${props.windSpeed}mph - ${props.windDirection}`}</p>
        </div>
      </div>
    </Fragment>
  )
};

export default WeatherDetails;