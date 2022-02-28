import React from "react";

import { Book } from "../Book/Book";
import "./Booklist.scss";

export const Booklist = ({ books }) => {
  return (
    <section className="booklist">
      {books &&
        books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
    </section>
  );
};
