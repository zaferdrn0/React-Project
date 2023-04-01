import React, { useEffect, useState } from "react";
import "./ToDo.css";

const ToDo = (props) => {
  const  label  = props.label

  const [todo, setTodo] = useState([]);
  const [inpValue, setInpValue] = useState("");

  const InputChange = (event) => {
    setInpValue(event.target.value);
  };
  const addToDo =  (event) => {
   setTodo([{text: inpValue }]);
    setInpValue("");
  };

  useEffect(() => {
    const sendToDo = async () => {
      const response = await fetch("http://localhost:3001/addtodo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: todo }),
        credentials: "include",
      });
  
      const data = await response.json();
      console.log(data);
    };
  
    sendToDo();
  }, [todo]);


  
    


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
              <div key={i} className="buttons"><p >{to.text}</p> 
              <div className="edit"><button onClick={() => deleteToDo(i)}>Edit</button>
              <button onClick={() => deleteToDo(i)}>Delete</button></div>
              
              </div>
                
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
