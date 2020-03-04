import React from "react";
import "./style.css";

import DataTable from "../../../employeeTable/components/table/DataTable";

import Container from "react-bootstrap/Container";

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

  return `${hours}:${min}`;
};

export default function ProfileContent(props) {
  const attendanceData = props.attendanceData.map(data => {
    return {
      start_time: data.start_time,
      end_time: data.end_time,
      duration: getDuration(data.start_time, data.end_time)
    };
  });
  return (
    <div className="profile-content">
      <Container>
        <h1 className="content-title">Attandance Table</h1>
        <DataTable
          tableHeads={["Entry", "Exit", "Duration"]}
          data={attendanceData}
          isAttendanceTable={true}
        />
      </Container>
    </div>
  );
}
