import { useState } from 'react'
import Login from "./components/Demo/Login";
import ParentLogin from "./components/Demo/ParentLogin";
import UseEffectDemo from "./components/Demo/UseEffectDemo";
import AuthContext from "./context/auth-context";

function App() {
  // const [show, setShow] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <h1>Hello React!!</h1>

      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>

        <ParentLogin />

      </AuthContext.Provider>


      {/* <UseEffectDemo /> */}

      {/* <Login /> */}

      {/* <button onClick={() => setShow(!show)}>Toggle Component</button> */}
      {/* {show && <ClassBased />} */}
      {/* <Expenses /> */}
    </div>
  );
}

export default App;
