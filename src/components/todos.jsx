import React, { useEffect, useState } from "react";
import Addtodo from "./addtodo";

export default () => {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");

  const getDate = (date) => {
    let d = new Date(date);
    return d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear();
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");

      const data = await response.json();

      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Addtodo
        setTodos={setTodos}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDesciption}
      />
      {todos.length > 0 && (
        <div className="d-flex gap-2 p-2">
          {todos.map((item) => {
            return (
              <>
                <div className="card custom_card p-2 border border-black">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      removeItem(item._id);
                    }}
                  >
                    Delete
                  </button>

                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {getDate(item.createdAt)}
                    </h6>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
