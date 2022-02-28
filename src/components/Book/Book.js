import React from "react";
import "./Book.scss";
import noImage from "../../assets/no-image.png";

export const Book = ({ book }) => {
  const info = book.volumeInfo;

  return (
    <div className="book">
      <div className="book__image">
        {info.imageLinks ? (
          <img src={info.imageLinks.thumbnail} alt="book" />
        ) : (
          <img src={noImage} alt="no" />
        )}
      </div>
      <div className="book__details">
        <h1>{info.title}</h1>
        <p className="author">
          By: <span>{info.authors}</span>
        </p>
        <p>
          Published By: <span>{info.publisher}</span>
        </p>
        <a target="_blank" href={info.infoLink} rel="noreferrer">
          See This Book
        </a>
      </div>
    </div>
  );
};
