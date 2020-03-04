import React from "react";
import "./style.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default function ProfileHeader() {
  const name = localStorage.getItem("name");
  const department = localStorage.getItem("department");
  const src = localStorage.getItem("src");
  const designation = localStorage.getItem("designation");
  const phone_number = localStorage.getItem("phone_number");
  return (
    <div className="profile-header">
      <Jumbotron className="header-jumbotron profile-header-jumbotron" fluid>
        <Container className="employee-details">
          <div className="employee-avatar">
            <img src={src} alt={`${name}'s avatar`} />
          </div>
          <div className="employee-info">
            <h2>{name}</h2>
          </div>
          <div className="badges">
            <h3>
              <Badge pill variant="secondary">
                {department}
              </Badge>
            </h3>
            <h3>
              <Badge pill variant="secondary">
                {designation}
              </Badge>
            </h3>
            <h3>
              <Badge pill variant="secondary">
                {phone_number}
              </Badge>
            </h3>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}
