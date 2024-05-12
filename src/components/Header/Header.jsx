import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Harry Potter Series
      </Link>
      <div className="more">
        <ul>
          <li>
            <a href="/#">Characters</a>
          </li>
          <li>
            <a href="/#">Potions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
