import { useState } from "react";
import ClassBased from "./components/Demo/ClassBasedComp";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello React!!</h1>

      <button onClick={() => setShow(!show)}>Toggle Component</button>
      {show && <ClassBased />}
      {/* <Expenses /> */}
    </div>
  );
}

export default App;
