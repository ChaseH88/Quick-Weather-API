import React from "react";

// Styled Components
import Header from "../styledComponents/header";

const Welcome = (props) => (
  <Header>{props.msg}</Header>
)

export default Welcome