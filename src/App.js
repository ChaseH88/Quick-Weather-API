import React from 'react';

// Style Sheet
import "./App.css"

// Components
import Welcome from "./components/Welcome";
import Location from "./components/Location";

// Styled Components
import Container from "./components/styledComponents/Container";

const Main = () => {
  const message = "Welcome to Chase's Weather App";
  document.title = message;
  //Render
  return(
    <Container>
        <Welcome msg={message} />
        <Location msg={message} />
    </Container>
  )
}

export default Main;
