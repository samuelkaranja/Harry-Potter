import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <Link to="/">Harry Potter Series</Link>
    </div>
  );
};

export default header;
