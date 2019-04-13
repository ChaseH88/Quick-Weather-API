import React from 'react';

// Style Sheet
import "./App.css"

// Components
import Welcome from "./components/Welcome";
import Location from "./components/Location";

// Styled Components
import Container from "./styledComponents/Container";

const Main = () => {
  //Render
  return(
    <Container>
        <Welcome msg="Welcome to Chase's Weather App" />
        <Location />
    </Container>
  )
}

export default Main;
