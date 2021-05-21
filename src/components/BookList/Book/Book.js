import React from "react";
import noImage from "../../../icons8-no-image-80.png";
import "./Book.scss";

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="book__image">
        {book.imageLinks ? (
          <img src={book.imageLinks.thumbnail} alt="book" />
        ) : (
          <img src={noImage} alt="no" />
        )}
      </div>
      <div className="book__info">
        <h1>{book.title}</h1>
        <p className="author">
          By: <span>{book.authors}</span>
        </p>
        <p>
          Published By: <span>{book.publisher}</span>
        </p>
        <a target="_blank" href={book.infoLink} rel="noreferrer">
          See This Book
        </a>
      </div>
    </div>
  );
};

export default Book;
