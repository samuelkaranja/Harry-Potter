import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FantasyBooks } from "../../assets/FantasyBooks";

const Details = () => {
  const { id } = useParams();
  const book = FantasyBooks.find((bk) => bk.id === parseInt(id));

  if (!book) {
    return <div>Article not found</div>;
  }

  return (
    <div className="details">
      <div className="navigation">
        <Link to="/">Back</Link>
      </div>
      <div className="intro">
        <img src={book.img} alt="" />
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
      </div>
      <div className="rating">
        <div className="b">
          <p>1</p>
          <span>Book</span>
        </div>
        <div className="page">
          <p>309</p>
          <span>Pages</span>
        </div>
        <div className="rate">
          <p>4.5</p>
          <span>Rating</span>
        </div>
      </div>
      <div className="info">
        <h1>What's it about?</h1>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default Details;
