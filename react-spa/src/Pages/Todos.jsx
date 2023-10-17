import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3030/todos");
        const todos = await response.json();
        setTodos(todos);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              {todo.label.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
