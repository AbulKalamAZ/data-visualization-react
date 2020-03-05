import React, { useState } from "react";
import "./style.css";

import { connect } from "react-redux";

import Header from "../../components/header/Header";
import Content from "../../components/content/Content";

const EmployeeTable = props => {
  const { employeeData } = props;

  const [numberOfData] = useState(employeeData.length);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLimitPerPage] = useState(10);

  const handlePageChange = numberOfPage => {
    setCurrentPage(numberOfPage);
  };

  let indexOfLastData = currentPage * dataLimitPerPage;
  let indexOfFirstData = indexOfLastData - dataLimitPerPage;
  let initialData = employeeData.slice(indexOfFirstData, indexOfLastData);
  return (
    <div className="employee-table">
      <Header>
        <div className="header-content">
          <h1>Employee Data Visualization</h1>
          <p>This is a coding assesment test at home by mononAI Ltd</p>
        </div>
      </Header>
      <Content
        contentTitle="Employee Data Table"
        tableHeads={["Name", "Email", "Department", "Last seen"]}
        data={initialData}
        isAttendanceTable={false}
        numberOfData={numberOfData}
        currentPage={currentPage}
        dataLimitPerPage={dataLimitPerPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    employeeData: state.employeeData
  };
};

export default connect(mapStateToProps, null)(EmployeeTable);
