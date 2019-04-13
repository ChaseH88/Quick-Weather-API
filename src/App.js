import React, { Fragment } from 'react';

// CSS
import './App.css';

// Components
import Welcome from "./components/Welcome";
import Location from "./components/Location";

const Main = () => {
  //Render
  return(
    <Fragment>
      <Welcome msg="Welcome to Chase's Weather App" />
      <Location />
    </Fragment>
  )
}

export default Main;
