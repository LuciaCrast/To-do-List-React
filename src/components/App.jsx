import React, { useState } from "react";
import { NewTask } from "./NewTask";
import { TasksList } from "./TasksList";
import "./app.scss";

function App() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTask] = useState([]);

  function handleChange({ target }) {
    const { name, value } = target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
      id: Date.now(),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!newTask) return;
    setAllTask((prevState) => [newTask, ...prevState]);
    setNewTask({});
  }

  function handleDelete(taskIdToRemove) {
    setAllTask((prevState) =>
      prevState.filter((task) => task.id !== taskIdToRemove)
    );
  }

  return (
    <main className="main">
      <header className="header">
        <h1 className="header__title">Your To Do List</h1>
      </header>
      <h2 className="taskTitle"> Add new Task</h2>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}

export default App;
