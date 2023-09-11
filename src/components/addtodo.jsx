import React, { useRef } from "react";

const Addtodo = ({
  setTodos,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  const mod = useRef();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mod.current.click();
    try {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: title,
          description: description,
        }), // body data type must match "Content-Type" header
      });

      const data = await response.json();

      setTodos(data);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex  justify-content-center mt-2">
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Notes
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Add task</h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <div className="container">
                <div className="row py-2">
                  <label htmlFor="title" className=" col-4">
                    Title
                  </label>
                  <input
                    name="title"
                    className=" col-8"
                    onChange={handleChangeTitle}
                    value={title}
                  />
                </div>
                <div className="row">
                  <label htmlFor="description" className="col-4">
                    Description
                  </label>
                  <input
                    name="description"
                    className=" col-8"
                    onChange={handleChangeDescription}
                    value={description}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={mod}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleSubmit}
              >
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtodo;
