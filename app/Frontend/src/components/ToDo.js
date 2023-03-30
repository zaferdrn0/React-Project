import React, { useState } from "react";
import "./ToDo.css";

const ToDo = (props) => {
  const { label } = props;

  const [todo, setTodo] = useState([]);
  const [inpValue, setInpValue] = useState("");

  const InputChange = (event) => {
    setInpValue(event.target.value);
  };
  const addToDo = (event) => {
    setTodo([...todo, { text: inpValue }]);
    setInpValue("");
  };

  const deleteToDo = (i) => {
    setTodo(todo.filter((_, index) => index !== i));
  };

  return (
    <div className="home">
      <div className="container-2">
        <div className="todo-app">
        <h2>{label}</h2>
          <div className="input">
            <input type="text" value={inpValue} onChange={InputChange} />
            <button onClick={addToDo}>Add To Do</button>
          </div>
          <div className="todo-list">
            {todo.map((to, i) => (
              <div className="buttons"><p key={i}>{to.text}</p>{" "}
              <button onClick={() => deleteToDo(i)}>X</button></div>
                
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
