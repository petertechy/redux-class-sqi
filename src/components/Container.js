import React from "react";
import NavBar from "./NavBar";

const Container = ({ children }) => {
  return (
    <div className='App-header'>
      <NavBar />
      {/* <h1>This is container</h1> */}
      {children}
    </div>
  );
};

export default Container;
