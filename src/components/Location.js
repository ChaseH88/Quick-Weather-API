import React, { Fragment, useState } from "react";
import axios from "axios";

// Components
import WeatherDetails from "./WeatherDetails";

// Styled Components
import Form from "./styledComponents/Form";

const Location = () => {
  // State
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState("");
  const [apiURL, setApiURL] = useState("");
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
  async function updateLocation(e){
    let zipcode = parseFloat(e.target.value);
    //check the input for a string or num and pass to the state
    if(isNaN(zipcode)){
      let loc = e.target.value.replace(" ","").toLowerCase();
      setLocation(loc)
    } else {
      setLocation(zipcode);
    }
    isNaN(zipcode) ?
      setLocation(e.target.value.replace(" ","").toLowerCase()) :
      setLocation(zipcode);
    //set the url depending on user input
    typeof location === "string" ? 
      await setApiURL(`https://api.weatherbit.io/v2.0/current?city=${(location)}&key=${apiKey}`) : 
      await setApiURL(`https://api.weatherbit.io/v2.0/current?postal_code=${location}&country=US&key=${apiKey}`);
  }

  // On Submit
  function submitForm(e) {
    e.preventDefault();
    // Call the API!!!
    const getData = async () => {
      try {
          const res = await axios.get(apiURL);
          const { data } = res.data;
          return data;
      } catch (err) {
          console.error(err);
      }
    };
    const weather = getData();
    // Resolve
      weather.then((details) => {
        if(details){
          details.forEach((info) => {
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
            // Open the modal
            openModal(modal);
          });
        }
      });
  }

  // Opens the modal, function is also given to
  // the WeatherDetails component to close it
  function openModal(modal){
    //flip the value
    modal = !modal
    if(modal === false){
      document.body.classList.remove("night");
      document.querySelector("#locationText").value = "";
    }
    setModal(modal);
  }

  // Render
  return(
    <Fragment>
      <Form onSubmit={submitForm}>
        <div className="formElem">
          <label>Enter Location</label>
          <input required id="locationText" type="text" placeholder="City, ST" onChange={updateLocation} autoComplete="off" />
        </div>
        <div className="formElem">
          <button>Go!</button>
        </div>
      </Form>
      {modal && 
        <WeatherDetails
          modal={openModal}
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