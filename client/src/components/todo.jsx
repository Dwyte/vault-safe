import React, { useState, useEffect } from "react";
import TodoItem from "./todoItem";
import TodoForm from "./todoForm";
import CryptoJS from "crypto-js";
import nanoid from "nanoid";
import { updateVault, deleteVault } from "../services/vaultServices";
import Link from "./common/link";
import _ from "lodash";
import NavBar from "./common/navbar";
const { AES } = CryptoJS;

const Todo = props => {
  const [todos, setTodos] = useState([]);
  const [filterIndex, setFilter] = useState(0);
  const filters = [
    { fa: "fas fa-globe-americas", filterMethod: null },
    {
      fa: "fas fa-star",
      filterMethod: ({ favorite }) => {
        return favorite;
      }
    },
    {
      fa: "fa fa-th-list",
      filterMethod: ({ completed }) => {
        return !completed;
      }
    },
    {
      fa: "fas fa-check-square",
      filterMethod: ({ completed }) => {
        return completed;
      }
    }
  ];
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    const { vault, vaultKey } = getVaultData();

    // Decrypt & Parse
    const todos = JSON.parse(
      AES.decrypt(vault, vaultKey).toString(CryptoJS.enc.Utf8)
    );

    setTodos(todos);
  }, []);

  const saveVault = async todos => {
    let { auth, vault, vaultKey } = getVaultData();

    vault = AES.encrypt(JSON.stringify(todos), vaultKey).toString();

    try {
      await updateVault({ auth, vault });
      localStorage.setItem(
        "currentVault",
        JSON.stringify({ auth, vault, vaultKey })
      );
    } catch (ex) {
      alert(ex);
    }
  };

  const getVaultData = () => {
    return JSON.parse(localStorage.getItem("currentVault"));
  };

  const addTodo = title => {
    const todo = {
      _id: nanoid(8),
      title,
      completed: false
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);

    saveVault(newTodos);
  };

  const flipDoneTodo = _id => {
    const newTodos = [...todos];
    let todo = newTodos.find(t => t._id === _id);
    todo.completed = !todo.completed;
    setTodos(newTodos);

    saveVault(newTodos);
  };

  const favoriteTodo = _id => {
    const newTodos = [...todos];
    let todo = newTodos.find(t => t._id === _id);
    todo.favorite = !todo.favorite;
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

  const exitVault = () => {
    localStorage.clear();
  };

  const deleteVaultFromDb = async e => {
    e.preventDefault();

    try {
      await deleteVault();
      exitVault();
      alert("Vault succesfuly deleted from the database.");
      window.location = "/";
    } catch (ex) {
      alert(ex);
    }
  };

  const filtered = _.filter(todos, filters[filterIndex].filterMethod);

  const sorted = _.orderBy(filtered, ["title"], [sort]);

  const isAsc = sort === "asc";

  return (
    <React.Fragment>
      <NavBar
        filters={filters}
        filterIndex={filterIndex}
        isAsc={isAsc}
        setFilter={setFilter}
        setSort={setSort}
      />

      {sorted.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          flipDoneTodo={flipDoneTodo}
          favoriteTodo={favoriteTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />

      <Link
        className="float-right"
        onClick={deleteVaultFromDb}
        href="/login"
        label="Delete Vault"
      />
      <Link onClick={exitVault} href="/login" label="Exit Vault" />
    </React.Fragment>
  );
};

export default Todo;
