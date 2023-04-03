import React, { useState } from "react";
import "./ToDo.css";

const ToDo = (props) => {
  const { todoObj, addTodoProps, deleteTodoProps, cagirBeni } = props;

  const [todoInput, setTodoInput] = useState("");

  function addTodo() {
    fetch("http://localhost:3001/addTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ baslik: todoObj.baslik, todo: todoInput }),
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        addTodoProps(todoObj.baslik, todoInput);
      }
    });
    setTodoInput("");
  }
  function categoryDelete() {
    fetch("http://localhost:3001/deleteCategory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ baslik: todoObj.baslik }),
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        cagirBeni((prev) => {
          let ToReturn = [...prev];
          let index = ToReturn.findIndex(
            (elem) => elem.baslik == todoObj.baslik
          );
          ToReturn.splice(index, 1);
          return ToReturn;
        });
      }
    });
  }
  function deleteToDo(index) {
    fetch("http://localhost:3001/deleteToDo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        baslik: todoObj.baslik,
        todo: todoObj.todoList[index],
      }),
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        deleteTodoProps(todoObj.baslik, todoObj.todoList[index]);
      }
    });
  }

  return (
    <div className="home">
      <div className="container-2">
        <h1>{todoObj.baslik}</h1>{" "}
        <button onClick={categoryDelete}>kaldır</button>
        <div className="todo-app">
          <div className="input">
            <input
              placeholder="todo ekle"
              value={todoInput}
              onChange={(event) => {
                setTodoInput(event.target.value);
              }}
            ></input>
            <button onClick={addTodo}>Ekle</button>
          </div>
          <div className="todo-list">
            {todoObj.todoList.map((todo, index) => {
              return (
                <div key={index + "i" + todo} className="buttons">
                  <p>{todo}</p>{" "}
                  <button
                    onClick={() => {
                      deleteToDo(index);
                    }}
                  >
                    sil
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  /* return (
    <div>
      <h1>{todoObj.baslik}</h1>
      {todoObj.todoList.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <input
        placeholder="todo ekle"
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value);
        }}
      ></input>
      <button onClick={addTodo}>Ekle</button>
    </div>
  ); */
};

export default ToDo;
