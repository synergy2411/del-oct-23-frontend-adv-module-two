import React, { useEffect, useState } from "react";

const Output = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("without dependency Effect works");
  });

  useEffect(() => {
    console.log("Effect works with Empty Deps");
  }, []);

  useEffect(() => {
    console.log("Effect works with Couter Deps");
  }, [counter]);

  useEffect(() => {
    console.log("Effect works with Counter Deps and CleanUp");
    return () => console.log("Clean Up");
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Counter : {counter}
      </button>
    </div>
  );
};

export default Output;
