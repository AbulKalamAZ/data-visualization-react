import React from "react";
import "./style.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Header(props) {
  const { children } = props;
  return (
    <div className="header">
      <Jumbotron className="header-jumbotron" fluid>
        <Container>{children}</Container>
      </Jumbotron>
    </div>
  );
}
