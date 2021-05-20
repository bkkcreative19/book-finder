import React from "react";
import Book from "./Book/Book";
import "./BookList.scss";

const BookList = ({ books, error }) => {
  return (
    <section className="book-list">
      {books || error ? (
        books.map((book) => {
          return <Book key={book.id} book={book.volumeInfo} />;
        })
      ) : (
        <h1 className="no-books">No books matching your query</h1>
      )}
    </section>
  );
};

export default BookList;
