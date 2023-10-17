import React, { useEffect, useState } from "react";
import classes from "./TodoEdit.module.css";
import { useNavigate, useParams } from "react-router-dom";

const TodoEdit = () => {
  const { todoId } = useParams();

  const [todo, setTodo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const resp = await fetch(`http://localhost:3030/todos/${todoId}`);

        const todo = await resp.json();

        setTodo(todo);
      } catch (err) {}
    };

    fetchTodo();
  }, [todoId]);

  const yesClickHandler = () => {
    fetch("http://localhost:3030/todos/" + todo.id, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        navigate("/todos");
      })
      .catch();
  };

  if (todo === null) {
    return <h1>Loading...</h1>;
  }

  if (todo) {
    return (
      <div className={classes["backdrop"]}>
        <div className={classes["alert-box"]}>
          <div className="card">
            <div className="card-header">
              <h5>{todo.label.toUpperCase()}</h5>
            </div>
            <div className="card-body">
              <p>Do you really want to delete this item?</p>
              <div className="row">
                <div className="col-6">
                  <div className="d-grid">
                    <button className="btn btn-light" onClick={yesClickHandler}>
                      Yes
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      className="btn btn-secondary"
                      onClick={() => navigate("/todos")}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TodoEdit;
