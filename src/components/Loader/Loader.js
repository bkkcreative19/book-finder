import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader">
      <TailSpin />
    </div>
  );
};
