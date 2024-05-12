import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ bk }) => {
  if (!bk) {
    return <h3>Data cannot be found</h3>;
  }
  const { id, title, published, img } = bk;
  return (
    <div className="card">
      <div className="card-info">
        <img src={img} alt="" />
        <Link to={`/details/${id}`} className="title">
          {title}
        </Link>
        <span className="published">Published in {published}</span>
      </div>
    </div>
  );
};

export default Card;
