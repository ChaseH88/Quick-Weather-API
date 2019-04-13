import React, { Fragment, useState } from "react";
import axios from "axios";

// Components
import WeatherDetails from "./WeatherDetails";

// Styled Components
import Form from "../styledComponents/Form";

const Location = () => {
  // State
  const [location, setLocation] = useState("Mobile, AL");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [temp, setTemp] = useState("");
  const [feelsLike, setfeelsLike] = useState("");
  const [clouds, setClouds] = useState("");
  const [rain, setRain] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [uvIndex, setUvIndex] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");

  // API config
  const apiKey = "47b4b166bf68465eb7c4695bd5f4e6f5";

  // Functions
  function updateLocation(e) {
    setLocation(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
  // Call the API!!!
  axios.get(`http://api.weatherbit.io/v2.0/current?city=${(location.replace(" ","").toLowerCase())}&key=${apiKey}`)
  .then(function (response) {
    console.log(response);
    const { data } = response;
    const info = data.data[0];
    // Update the state
    setCity(info.city_name);
    setState(info.state_code);
    setTemp(info.temp);
    setfeelsLike(info.app_temp);
    setClouds(info.clouds);
    setRain(info.precip);
    setWindSpeed(info.wind_spd);
    setWindDirection(info.wind_cdir);
    setTimeOfDay(info.pod);
    setUvIndex(info.uv);
    setIcon(info.weather.icon);
    setDescription(info.weather.description);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  // Render
  return(
    <Fragment>
      <Form onSubmit={submitForm}>
        <div className="formElem">
          <label>Enter Location</label>
          <input id="locationText" type="text" placeholder="City, ST" onChange={updateLocation} autoComplete="off" />
        </div>
        <div className="formElem">
          <button>Go!</button>
        </div>
      </Form>
      {city && 
        <WeatherDetails
          city={city}
          state={state}
          temp={temp}
          feelsLike={feelsLike}
          clouds={clouds}
          rain={rain}
          windSpeed={windSpeed}
          windDirection={windDirection}
          timeOfDay={timeOfDay}
          uvIndex={uvIndex}
          icon={icon}
          description={description}
        />
      }
    </Fragment>
  )
}

export default Location;