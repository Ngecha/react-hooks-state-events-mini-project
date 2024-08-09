import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({ text: "", category: "" });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ text: "", category: "" });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleFormChange}
        >
          {/* render <option> elements for each category here */}
          {categories.map(
            (category) =>
              category !== "All" && <option key={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
