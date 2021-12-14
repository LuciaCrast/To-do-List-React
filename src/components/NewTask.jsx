import React from "react";
import "./newtask.scss";

function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__taskTitle"> Add new Task</h2>
      <input
        className="form__textInput"
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            className="form__descriptionInput"
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button className="form__button" type="submit">
            Add Task
          </button>
        </>
      )}
    </form>
  );
}

export { NewTask };
