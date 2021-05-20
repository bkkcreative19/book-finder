import React, { useState } from "react";
import BookList from "../../components/BookList/BookList";
import Search from "../../components/Search/Search";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import "./Home.scss";

const Home = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const searchBooks = async (e) => {
    e.preventDefault();
    setBooks([]);

    try {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}`;

      const { data } = await axios.get(apiUrl);
      setLoading(true);
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
        <Skeleton height={`100vh`} />
      ) : (
        <BookList error={error} books={books} />
      )}
    </section>
  );
};

export default Home;
