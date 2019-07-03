import React from "react";
import Button from "./common/button";

const TodoItem = ({ todo, favoriteTodo, flipDoneTodo, removeTodo }) => {
  const textStyle = {
    textDecoration: todo.completed ? "line-through" : "none"
  };

  const { _id, title, completed, favorite } = todo;

  return (
    <div className="todo mb">
      <span style={textStyle}>{title}</span>
      <div>
        <Button
          fa={completed ? "fas fa-undo-alt" : "fas fa-check-square"}
          onClick={() => flipDoneTodo(_id)}
        />
        <Button
          fa={favorite ? "fas fa-star" : "far fa-star"}
          onClick={() => favoriteTodo(_id)}
        />
        <Button fa="fas fa-trash" onClick={() => removeTodo(_id)} />
      </div>
    </div>
  );
};

export default TodoItem;
