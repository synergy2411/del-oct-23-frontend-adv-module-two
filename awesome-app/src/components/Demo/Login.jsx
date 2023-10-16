import React, { useContext } from "react";
import { useState, useRef } from "react";
import AuthContext from "../../context/auth-context";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const context = useContext(AuthContext);

  console.log("CONTENT AGAIN : ", context);
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("EMAIL : ", enteredEmail);
    console.log("PASSWORD: ", passwordInputRef.current.value);

    if (
      enteredEmail.trim() === "john@test" &&
      passwordInputRef.current.value.trim() === "john123"
    ) {
      context.setIsLoggedIn(true);
    }
  };

  return (
    <form>
      {/* Controlled */}
      <h2>User is {!context.isLoggedIn && "NOT"} Logged-in </h2>
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
    // <AuthContext.Consumer>
    //   {(context) => {
    //     console.log("CONTEXT : ", context);
    //     return (
    //       <form>
    //         {/* Controlled */}
    //         <label htmlFor="email">Email : </label>
    //         <input
    //           type="email"
    //           name="email"
    //           value={enteredEmail}
    //           onChange={(event) => setEnteredEmail(event.target.value)}
    //         />
    //         <br />

    //         {/* Uncontrolled */}
    //         <label htmlFor="password">Password : </label>
    //         <input type="password" name="password" ref={passwordInputRef} />

    //         <br />

    //         <button className="btn btn-primary" onClick={submitHandler}>
    //           Submit
    //         </button>
    //       </form>
    //     );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Login;
