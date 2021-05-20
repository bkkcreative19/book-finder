import React from "react";
import Book from "./Book/Book";
import "./BookList.scss";

const BookList = ({ books }) => {
  return (
    <section className="book-list">
      {books ? (
        books.map((book) => {
          return <Book key={book.id} book={book.volumeInfo} />;
        })
      ) : (
        <h1>No books matching your query</h1>
      )}
    </section>
  );
};

export default BookList;
