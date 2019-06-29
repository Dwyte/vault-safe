import React from "react";

const TodoItem = ({ todo, favoriteTodo, flipDoneTodo, removeTodo }) => {
  const textStyle = {
    textDecoration: todo.completed ? "line-through" : "none"
  };

  const {_id, title, completed, favorite} = todo;

  return (
    <div className="todo mb">
      <span style={textStyle}>{title}</span>
      <div>
        <button onClick={() => flipDoneTodo(_id)}>
          <i className={completed ? "fas fa-undo-alt" : "fas fa-check-square"} />
        </button>
        {" "}
        <button onClick={() => favoriteTodo(_id)}>
          <i className={favorite ? "fas fa-star" : "far fa-star"} />
        </button>
        {" "}
        <button onClick={() => removeTodo(_id)}>
          <i className="fas fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
