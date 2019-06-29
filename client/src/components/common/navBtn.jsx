import React from "react";

const NavBtn = ({ className, onClick, fa }) => {
  return (
    <React.Fragment>
      <button className={className} onClick={onClick}>
        <i className={fa} />
      </button>{" "}
    </React.Fragment>
  );
};

export default NavBtn;
