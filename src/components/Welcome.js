import React from "react";

// Styled Components
import Header from "../components/styledComponents/Header";

const Welcome = (props) => (
  <Header>{props.msg}</Header>
)

export default Welcome