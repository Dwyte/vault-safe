import React from "react";
import Button from "./button";

const NavBar = ({ filters, filterIndex, isAsc, setFilter, setSort }) => {
  return (
    <div className="nav">
      {filters.map(filter => (
        <Button
          key={filters.indexOf(filter)}
          className={filters[filterIndex] === filter ? "active" : ""}
          onClick={() => setFilter(filters.indexOf(filter))}
          fa={filter.fa}
        />
      ))}
      <Button
        className="active"
        onClick={() => setSort(isAsc ? "desc" : "asc")}
        fa={isAsc ? "fas fa-sort-alpha-down" : "fas fa-sort-alpha-up"}
      />
    </div>
  );
};

export default NavBar;
