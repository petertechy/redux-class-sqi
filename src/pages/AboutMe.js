import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCustomNumber, addOne } from "../redux/userSlice";

const AboutMe = () => {
  const [number, setnumber] = useState(200);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div className='App-header'>
      <h1>{number}</h1>

      <h1>{user}</h1>

      <button onClick={() => dispatch(addOne())}>Add One</button>
      <button onClick={() => dispatch(addCustomNumber(10))}>
        Add Custom Number
      </button>
      <h1>About Me</h1>
      <p>
        The farmers will make more money. Your lunch will not be imported,
        cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the
        dinner would be cassava eba ewa and everything.
      </p>
    </div>
  );
};

export default AboutMe;
