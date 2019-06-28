import React, { useState, useEffect } from "react";
import TodoItem from "./todoItem";
import TodoForm from "./todoForm";
import CryptoJS from "crypto-js";
import nanoid from 'nanoid';
import { updateVault } from "../services/vaultServices";
const { AES } = CryptoJS;

const Todo = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const { vault, vaultKey } = JSON.parse(
      localStorage.getItem("currentVault")
    );

    // Decrypt & Parse
    const todos = JSON.parse(
      AES.decrypt(vault, vaultKey).toString(CryptoJS.enc.Utf8)
    );

    setTodos(todos);
  }, []);

  const saveVault = async (todos) => {
    let { auth, vault, vaultKey } = JSON.parse(
      localStorage.getItem("currentVault")
    );

    vault = AES.encrypt(JSON.stringify(todos), vaultKey).toString();

    try {
      await updateVault(auth, { auth, vault });
      localStorage.setItem(
        "currentVault",
        JSON.stringify({ auth, vault, vaultKey })
      );
    } catch (ex) {
      alert(ex);
    }
  }

  const addTodo = title => {
    const todo = {
      _id: nanoid(8),
      title,
      completed: false
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);

    saveVault(newTodos);
  };

  const completeTodo = _id => {
    const newTodos = [...todos];
    let todo = newTodos.find(t => t._id === _id);
    todo.completed = true;
    setTodos(newTodos);

    saveVault(newTodos);
  };

  const removeTodo = _id => {
    const newTodos = [...todos];
    const todo = newTodos.find(t => t._id === _id);
    newTodos.splice(newTodos.indexOf(todo), 1);
    setTodos(newTodos);

    saveVault(newTodos);
  };

  const deleteVault = () => {
    localStorage.removeItem('currentVault');
  }

  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
      <a onClick={deleteVault} href="/login"><small>Exit Vault</small></a>
    </React.Fragment>
  );
};

export default Todo;
