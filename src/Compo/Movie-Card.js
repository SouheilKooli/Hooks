import React from "react";
import Rating from "./Rating";

const MovieCard = ({ movie: { title, description, posterurl,rate } }) => {
  return (
    <div className="container">
      <div>
        <img src={posterurl} alt="Poster Movie" style={{ width: "200px", height: "250px" }} />
      </div>
      <div className="moviedetails">
        <h2>{title}</h2>
        <Rating rate={rate} />
        <p >{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;