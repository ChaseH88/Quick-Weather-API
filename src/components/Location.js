import React, { Fragment, useState } from "react";
import axios from "axios";

// Components
import WeatherDetails from "./WeatherDetails";

const Location = () => {
  // State
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [temp, setTemp] = useState("");
  const [clouds, setClouds] = useState("");
  const [rain, setRain] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [description, setDescription] = useState("");

  // API config
  const apiKey = "47b4b166bf68465eb7c4695bd5f4e6f5";

  // Functions
  function updateLocation(e) {
    var input = e.target.value;
    console.log(input);
    setLocation(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
  // Call the API!!!
  axios.get(`http://api.weatherbit.io/v2.0/current?city=${(location.replace(" ","").toLowerCase())}&key=${apiKey}`)
  .then(function (response) {
    const { data } = response;
    const info = data.data[0];
    // Update the state
    setCity(info.city_name);
    setState(info.state_code);
    setTemp(info.temp);
    setClouds(info.clouds);
    setRain(info.precip);
    setWindSpeed(info.wind_spd);
    setWindDirection(info.wind_cdir);
    setDescription(info.description);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  // Render
  return(
    <Fragment>
      <form onSubmit={submitForm}>
        <div className="formElem">
          <label>Enter Location</label>
          <input id="location" type="text" placeholder="City, ST" onChange={updateLocation} />
        </div>
        <div className="formElem">
          <button>Go!</button>
        </div>
      </form>
      {city && 
        <WeatherDetails
          city={city}
          state = {state}
          temp = {temp}
          clouds = {clouds}
          rain = {rain}
          windSpeed = {windSpeed}
          windDirection = {windDirection}
          description = {description}
        />
      }
    </Fragment>
  )
}

export default Location;