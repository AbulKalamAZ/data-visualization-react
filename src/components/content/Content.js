import React from "react";
import "./style.css";

import DataTable from "../table/DataTable";
import TablePagination from "../pagination/TablePagination";

import Container from "react-bootstrap/Container";

export default function Content(props) {
  const {
    contentTitle,
    tableHeads,
    data,
    isAttendanceTable,
    currentPage,
    numberOfData,
    dataLimitPerPage,
    handlePageChange
  } = props;

  return (
    <div className="content">
      <Container>
        <h1 className="content-title">{contentTitle}</h1>
        <DataTable
          tableHeads={tableHeads}
          data={data}
          isAttendanceTable={isAttendanceTable}
        />

        <TablePagination
          currentPage={currentPage}
          pageLimit={Math.ceil(numberOfData / dataLimitPerPage)}
          handlePageChange={handlePageChange}
        />
      </Container>
    </div>
  );
}
