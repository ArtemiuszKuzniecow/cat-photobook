import React from "react";
import _ from "lodash";
import { paginate } from "./paginate/paginate";

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
  onCurrentPhoto,
  photos,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => {
              onPageChange(currentPage - 1);
              onCurrentPhoto(paginate(photos, currentPage - 1, pageSize)[0].id);
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pages.map((page) => {
          return (
            <li
              className={"page-item" + (page === currentPage ? " active" : "")}
              key={"page_" + page}
            >
              <button
                className="page-link"
                onClick={() => {
                  onCurrentPhoto(paginate(photos, page, pageSize)[0].id);
                  onPageChange(page);
                }}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => {
              onPageChange(currentPage + 1);
              onCurrentPhoto(paginate(photos, currentPage + 1, pageSize)[0].id);
            }}
            disabled={currentPage === pageCount}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
