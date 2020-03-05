import React, { useState } from "react";
import "./style.css";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Content from "../../components/content/Content";

import PlaceholderImage from "../../assets/white_avatar.svg";

function EmployeeProfile(props) {
  // matching the requested from whole employees array
  const { id } = useParams();
  const { employees } = props;

  //extracting employee data
  const employee = employees.filter(employee => {
    return employee.id === id;
  });
  const employeeAttendanceData = employee[0].attendances;

  //declaring state
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfData] = useState(employeeAttendanceData.length);
  const [dataLimitPerPage] = useState(10);

  const handlePageChange = numberOfPage => {
    setCurrentPage(numberOfPage);
  };

  let indexOfLastData = currentPage * dataLimitPerPage;
  let indexOfFirstData = indexOfLastData - dataLimitPerPage;
  let initialData = employeeAttendanceData.slice(
    indexOfFirstData,
    indexOfLastData
  );

  //getting employee data form local storage
  const name = localStorage.getItem("name");
  const department = localStorage.getItem("department");
  const src = localStorage.getItem("src");
  const designation = localStorage.getItem("designation");
  const phone_number = localStorage.getItem("phone_number");

  //method for getting custom duration
  const getDuration = (time1, time2) => {
    let time_1 = time1
      .slice(time1.indexOf("T") + 1, time1.indexOf("Z"))
      .split(":");
    let time_2 = time2
      .slice(time2.indexOf("T") + 1, time2.indexOf("Z"))
      .split(":");

    var hours = parseInt(time_2[0]) + 12 - parseInt(time_1[0]);

    var min;
    if (parseInt(time_1[1]) < parseInt(time_2[1])) {
      min = parseInt(time_2[1]) - parseInt(time_1[1]);
    } else if (parseInt(time_1[1]) > parseInt(time_2[1])) {
      hours--;
      min = 60 - (parseInt(time_1[1]) - parseInt(time_2[1]));
    } else {
      min = "00";
    }

    return parseInt(hours) > 9 ? `${hours}h : ${min}m` : `0${hours}h : ${min}m`;
  };

  const formattedInitialData = initialData.map(data => {
    return {
      start_time: data.start_time,
      end_time: data.end_time,
      duration: getDuration(data.start_time, data.end_time)
    };
  });

  const onImageLoad = () => {
    setShowPlaceholder(false);
  };

  return (
    <div className="employee-profile">
      <Header>
        <div className="employee-details">
          <div className="employee-avatar">
            <img src={src} alt={`${name}'s avatar`} onLoad={onImageLoad} />
          </div>
          {showPlaceholder && (
            <div className="employee-avatar-overlay">
              <img src={PlaceholderImage} alt="avatar placeholder" />
            </div>
          )}
          <div className="employee-info">
            <h1>{name}</h1>
            <p>
              {designation} at {department} Department
            </p>
            <p>{phone_number}</p>
          </div>
        </div>
      </Header>
      <Content
        contentTitle={`${name}'s Attendance`}
        tableHeads={["Entry", "Exit", "Duration"]}
        data={formattedInitialData}
        isAttendanceTable={true}
        numberOfData={numberOfData}
        currentPage={currentPage}
        dataLimitPerPage={dataLimitPerPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};

export default connect(mapStateToProps, null)(EmployeeProfile);
