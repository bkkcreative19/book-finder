import React from "react";

import "./Input.scss";

export const Input = ({ input, setInput, fetchData }) => {
  return (
    <form className="input" action="">
      {input.length === 0 ? <h3>You have to enter something</h3> : ""}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          fetchData();
        }}
        className="input__btn"
      >
        Search
      </button>
    </form>
  );
};
