import React from "react";
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./paginationStyles.css";

export const Pagination = ({ pageCount, setPageNumber }) => (
  <ReactPaginate
    previousLabel={<AiOutlineArrowLeft />}
    nextLabel={<AiOutlineArrowRight />}
    pageCount={pageCount}
    containerClassName="pagination__container"
    pageClassName="pagination__page-number"
    previousClassName="pagination__arrow"
    nextClassName="pagination__arrow"
    onPageChange={({ selected }) => setPageNumber(selected)}
  />
);
