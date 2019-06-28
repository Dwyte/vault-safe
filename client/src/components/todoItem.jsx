import React from "react";

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo mb"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      {todo.title}
      <div>
        <button onClick={() => completeTodo(todo._id)}>Done</button>
        <button onClick={() => removeTodo(todo._id)}>x</button>
      </div>
    </div>
  );
};

export default TodoItem;
