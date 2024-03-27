import React from "react";
import NavBar from "./NavBar";

const Container = ({ children }) => {
  return (
    <div>
        <NavBar/>
      <h1>This is container</h1>
      {children}
    </div>
  );
};

export default Container;
