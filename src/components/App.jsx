import React, { useState } from "react";
import { NewTask } from "./NewTask";
import { TasksList } from "./TasksList";

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
    <main>
      <h1>Tasks</h1>
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
