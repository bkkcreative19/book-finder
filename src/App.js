import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import axios from "axios";
import "./App.scss";
import { Booklist } from "./components/Booklist/Booklist";
import { Loader } from "./components/Loader/Loader";

export const App = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState(null);

  const searchBooks = async () => {
    setLoading(true);

    setBooks([]);

    try {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=${process.env.REACT_APP_API_KEY}`;

      const { data } = await axios.get(apiUrl);

      setLoading(false);

      setBooks(data.items);
    } catch (err) {}
    setInput("");
  };

  return (
    <>
      <Header input={input} fetchData={searchBooks} setInput={setInput} />
      {loading ? <Loader /> : <Booklist books={books} />}
    </>
  );
};
