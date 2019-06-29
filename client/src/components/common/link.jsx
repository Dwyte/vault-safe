import React from "react";

const Link = ({className, onClick, href, label}) => {
  return (
    <a className={className} onClick={onClick} href={href}>
      <small>{label}</small>
    </a>
  );
};

export default Link;
