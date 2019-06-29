import React from "react";
import NavBtn from "./navBtn";

const NavBar = ({ filters, filterIndex, isAsc, setFilter, setSort }) => {
  return (
    <div className="nav">
      {filters.map(filter => (
        <NavBtn
          className={filters[filterIndex] === filter ? "active" : ""}
          onClick={() => setFilter(filters.indexOf(filter))}
          fa={filter.fa}
        />
      ))}
      <NavBtn
        className="active"
        onClick={() => setSort(isAsc ? "desc" : "asc")}
        fa={isAsc ? "fas fa-sort-alpha-down" : "fas fa-sort-alpha-up"}
      />
    </div>
  );
};

export default NavBar;
