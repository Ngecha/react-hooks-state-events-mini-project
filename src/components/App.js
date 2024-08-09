import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function handleFormSubmit(formData) {
    setTasks([...tasks, formData]);
  }

  function handleDelete(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setTasks={setTasks} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
