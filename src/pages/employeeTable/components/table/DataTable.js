import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";

export default class DataTable extends Component {
  setLocalStorage = data => {
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("department", data.department);
    localStorage.setItem("designation", data.designation);
    localStorage.setItem("phone_number", data.phone_number);
    localStorage.setItem("src", data.image);
  };

  render() {
    const { tableHeads, data, isAttendanceTable } = this.props;
    const tableHead = tableHeads.map((th, index) => {
      return <th key={`abs${index}`}>{th}</th>;
    });

    const tableData = data.map((data, index) => {
      return isAttendanceTable === false ? (
        <tr key={data.id}>
          <td>
            <Link
              to={`profile/${data.id}`}
              onClick={() => this.setLocalStorage(data)}
            >
              {data.name}
            </Link>
          </td>
          <td>{data.email}</td>
          <td>{data.department}</td>
          <td>{data.lastSeen}</td>
        </tr>
      ) : (
        <tr key={`${index}abcx${index}`}>
          <td>{data.start_time}</td>
          <td>{data.end_time}</td>
          <td>{data.duration}</td>
        </tr>
      );
    });
    return (
      <div className="data-table">
        <Table striped hover responsive="md">
          <thead>
            <tr>{tableHead}</tr>
          </thead>
          <tbody>{tableData}</tbody>
        </Table>
      </div>
    );
  }
}
