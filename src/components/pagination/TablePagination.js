import React from "react";
import "./style.css";

import Pagination from "react-bootstrap/Pagination";

export default function TablePagination(props) {
  const { currentPage, pageLimit, handlePageChange } = props;
  let active = currentPage;
  let items = [];

  for (let i = 1; i <= pageLimit; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={active === i}
        onClick={() => handlePageChange(i)}
        // className={active === i ? "isActive" : ""}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div className="table-pagination">
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}
