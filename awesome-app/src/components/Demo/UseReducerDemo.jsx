import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  result: [],
};

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "STORE_ RESULT") {
    return {
      ...state,
      result: [state.counter, ...state.result],
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  return state;
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h1>Use Reducer Demo</h1>
      <button
        className="btn  btn-secondary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Counter : {state.counter}
      </button>
      <button
        className="btn  btn-warning"
        onClick={() => dispatch({ type: "ADD_COUNTER", payload: 10 })}
      >
        ADD (10)
      </button>

      <br />
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "STORE_ RESULT" })}
      >
        STORE
      </button>

      <ul>
        {state.result.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerDemo;
