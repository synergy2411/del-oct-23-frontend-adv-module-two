import Login from "./components/Demo/Login";
import UseEffectDemo from "./components/Demo/UseEffectDemo";

function App() {
  // const [show, setShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello React!!</h1>

      <UseEffectDemo />

      {/* <Login /> */}

      {/* <button onClick={() => setShow(!show)}>Toggle Component</button> */}
      {/* {show && <ClassBased />} */}
      {/* <Expenses /> */}
    </div>
  );
}

export default App;
