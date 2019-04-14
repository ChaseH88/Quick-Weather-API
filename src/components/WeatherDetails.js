import React, { Fragment } from "react";

const WeatherDetails = props => {

  // Convert to Fahrenheit
  function celsiusToFahrenheit(temp){
    let newTemp = Math.round(temp * (9/5) + 32);
    return newTemp;
  }

  // Check to see if it's raining
  function checkRain(rain){
    if(rain != null) return(<p>Rain: {rain}</p>)
  }

  // Check for Time of Day
  function timeOfDay(timeOfDay){
    timeOfDay === "d" ? 
      document.body.classList.add("day") : 
      document.body.classList.add("night");
  }

  // Show UV Index if Daytime
  function UVindex(time){
    if(time === "d") return(<p>UV Index: {Math.round(props.uvIndex)}</p>)
  }

  // Fix for API naming my hometown wrong!!!
  function correctName(city, state){
    city === "Jefferson" && state === "AL" && (city = "Gardendale");
    return city;
  }

  // Render
  return(
    <Fragment>
      {timeOfDay(props.timeOfDay)}
      <div id="location">
        <div className="close">
          <button title="Close Window" onClick={props.modal}>X</button>
        </div>
        <div className="place">
          <h2>{`${correctName(props.city, props.state)}, ${props.state}`}</h2>
        </div>
        <div className="temperature">
          <img src={`/icons/${props.icon}.png`} alt={props.description} />
          <div className="twoCol">
            <p>
              <span>{celsiusToFahrenheit(props.temp)}&deg;</span>
              <span>Temperature</span>
            </p>
            <p>
              <span>{celsiusToFahrenheit(props.feelsLike)}&deg;</span>
              <span>Feels Like</span>
            </p>
          </div>
          {UVindex(props.timeOfDay)}
        </div>
        <div className="details">
          <p>Description: {props.description}</p>
          {checkRain(props.rain)}
          <p>Cloud Cover: {props.clouds}%</p>
          <p>Wind: {`${props.windSpeed}mph - ${props.windDirection}`}</p>
        </div>
      </div>
    </Fragment>
  )
};

export default WeatherDetails;