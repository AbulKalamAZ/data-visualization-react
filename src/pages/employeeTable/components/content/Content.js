import React from "react";
import "./style.css";

import DataTable from "../table/DataTable";

import Container from "react-bootstrap/Container";

export default function Content(props) {
  const { data } = props;
  return (
    <div className="content">
      <Container>
        <h1 className="content-title">Employee Table</h1>
        <DataTable
          tableHeads={["Name", "Email", "Department", "Last seen"]}
          data={data}
          isAttendanceTable={false}
        />
      </Container>
    </div>
  );
}
