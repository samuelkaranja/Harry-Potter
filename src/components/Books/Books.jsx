import React from "react";
import "./style.css";
import Card from "../Card/Card";
import { FantasyBooks } from "../../assets/FantasyBooks";

const Books = () => {
  return (
    <div className="books">
      {FantasyBooks.map((bk) => {
        return <Card bk={bk} />;
      })}
    </div>
  );
};

export default Books;
