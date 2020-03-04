import React from "react";
import "./style.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Header() {
  return (
    <div className="header">
      <Jumbotron className="header-jumbotron" fluid>
        <Container>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Employee data visualization
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </Jumbotron>
    </div>
  );
}
