import React from "react";
import { Input } from "../Input/Input";
import "./Header.scss";

export const Header = ({ setInput, fetchData, input }) => {
  return (
    <header className="header">
      <h1 className="header__text">Book Finder</h1>
      <Input input={input} fetchData={fetchData} setInput={setInput} />
    </header>
  );
};
