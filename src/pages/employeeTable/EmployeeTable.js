import React, { Component } from "react";
import "./style.css";

import { connect } from "react-redux";

import Header from "./components/header/Header";
import Content from "./components/content/Content";

class EmployeeTable extends Component {
  render() {
    const { employeeData } = this.props;
    return (
      <div className="employee-table">
        <Header />
        <Content data={employeeData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeData: state.employeeData
  };
};

export default connect(mapStateToProps, null)(EmployeeTable);
