import React from "react";
import { useState, useRef } from "react";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("EMAIL : ", enteredEmail);
    console.log("PASSWORD: ", passwordInputRef.current.value);
  };

  return (
    <form>
      {/* Controlled */}
      <label htmlFor="email">Email : </label>
      <input
        type="email"
        name="email"
        value={enteredEmail}
        onChange={(event) => setEnteredEmail(event.target.value)}
      />
      <br />

      {/* Uncontrolled */}
      <label htmlFor="password">Password : </label>
      <input type="password" name="password" ref={passwordInputRef} />

      <br />

      <button className="btn btn-primary" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default Login;
