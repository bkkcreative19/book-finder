import React, { useState } from "react";
import BookList from "../../components/BookList/BookList";
import Search from "../../components/Search/Search";
import loader from "../../Spinner-1s-200px.gif";
import axios from "axios";
import "./Home.scss";

const Home = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const searchBooks = async (e) => {
    setLoading(true);
    e.preventDefault();
    setBooks([]);

    try {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}`;

      const { data } = await axios.get(apiUrl);

      setLoading(false);

      setBooks(data.items);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="home">
      <h1 className="home__heading">Book Finder</h1>
      {search.length === 0 && <h3 className="error">Please enter something</h3>}
      <Search search={search} searchBooks={searchBooks} setSearch={setSearch} />

      {loading ? (
        <img src={loader} alt="" />
      ) : (
        <BookList error={error} books={books} />
      )}
    </section>
  );
};

export default Home;
