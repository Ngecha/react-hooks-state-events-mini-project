import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function CategoryFilter({ setTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleCategorySelection(category) {
    setSelectedCategory(category);
    setTasks(
      category === "All"
        ? TASKS
        : TASKS.filter((task) => task.category === category)
    );
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {CATEGORIES.map((category) => {
        return (
          <button
            key={category}
            className={category === selectedCategory ? "selected" : ""}
            onClick={() => handleCategorySelection(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
