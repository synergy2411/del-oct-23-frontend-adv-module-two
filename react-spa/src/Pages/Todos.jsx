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
    <div className="container">
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.label.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
