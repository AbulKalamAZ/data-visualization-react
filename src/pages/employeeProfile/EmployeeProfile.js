import React from "react";
import "./style.css";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import ProfileHeader from "./components/profile-header/ProfileHeader";
import ProfileContent from "./components/profile-content/ProfileContent";

function EmployeeProfile(props) {
  const { id } = useParams();
  const { employees } = props;
  const employee = employees.filter(employee => {
    return employee.id === id;
  });
  const employeeAttendanceData = employee[0].attendances;
  return (
    <div className="employee-profile">
      <ProfileHeader />
      <ProfileContent attendanceData={employeeAttendanceData} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};

export default connect(mapStateToProps, null)(EmployeeProfile);
