import React, { useState } from "react";
import "./ToDo.css";

const ToDo = (props) => {
  const  label  = props.label

  const [todo, setTodo] = useState([]);
  const [inpValue, setInpValue] = useState("");

  const InputChange = (event) => {
    setInpValue(event.target.value);
  };
  const addToDo = async (event) => {
   await setTodo([...todo, { label: props.label, text: inpValue }]);
    setInpValue("");

    const response = await fetch('http://localhost:3001/addtodo', {
      method: 'POST',
      
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo:todo})
    });
  
    const data = await response.json({
     
    }).then((data) => {
      console.log(data)
    })
  
    return data;



    
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
              <div key={i} className="buttons"><p >{to.text}</p> 
              <button onClick={() => deleteToDo(i)}>X</button></div>
                
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
