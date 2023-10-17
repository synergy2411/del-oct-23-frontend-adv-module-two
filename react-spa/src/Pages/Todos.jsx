import React, { useEffect, useState } from "react";
import classes from "./Todos.module.css";

const fetchTodos = async () => {
  try {
    const response = await fetch("http://localhost:3030/todos");
    const todos = await response.json();
    return todos;
  } catch (err) {
    console.error(err);
  }
};

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos));
  }, []);

  const deleteItemHandler = async (todoId) => {
    try {
      await fetch(`http://localhost:3030/todos/${todoId}`, {
        method: "DELETE",
      });

      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

      // fetchTodos().then(todos => setTodos(todos));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              className={`list-group-item mb-3 ${classes["my-list"]}`}
              key={todo.id}
              onDoubleClick={() => deleteItemHandler(todo.id)}
            >
              {todo.label.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
