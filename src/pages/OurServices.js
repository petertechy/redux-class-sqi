import React from "react";
import { useSelector } from "react-redux";

const OurServices = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className='App-header'>
      <h1>Our Services</h1>
      <h1>{user}</h1>
      <p>
        The farmers will make more money. Your lunch will not be imported,
        cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the
        dinner would be cassava eba ewa and everything.
      </p>
    </div>
  );
};

export default OurServices;
