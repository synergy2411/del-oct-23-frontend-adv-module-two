import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [toggle, setToggle] = useState(false);

  const [counter, setCounter] = useState(0);

  const [search, setSearch] = useState("");

  const [repos, setRepos] = useState([]);

  //   useEffect(() => {
  //     console.log("Use Effect Works");
  //     return function () {
  //       console.log("Clean Up");
  //     };
  //   }, [counter]);\

  useEffect(() => {
    let notifier = setTimeout(() => {
      if (search !== "") {
        fetch(`https://api.github.com/users/${search}/repos`)
          .then((response) => response.json())
          .then((data) => setRepos(data))
          .catch(console.error);
      }
    }, 1500);

    return function () {
      clearTimeout(notifier);
    };
  }, [search]);

  return (
    <div>
      <h1>Use Effect Demo</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      <button
        className="btn btn-success"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>
      {toggle && <p>Toggle is true now!</p>}

      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectDemo;
