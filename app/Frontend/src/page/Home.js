import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
    
    const [todo, setTodo] = useState([])
    const [inpValue, setInpValue] = useState("")

    const InputChange = (event) =>{
      setInpValue(event.target.value);
    }
    const addToDo = (event) =>{

      setTodo([...todo, {text:inpValue}])
      setInpValue("");
    }

    const deleteToDo = (i) =>{
      setTodo(todo.filter((_, index) => index !== i));
    }

  return (
    <div>
       <div><Header/></div> 
       <div className='home'>
        <div className='container'>
          <div className='todo-app'>
            <div className='input'>
              <input type="text" value ={inpValue} onChange = {InputChange}/>
              <button onClick={addToDo}>Add To Do</button>
            </div>
            <div className='toDo-list'>{todo.map((to,i) =>(<><p key={i}>{to.text}</p> <button onClick={() => deleteToDo(i)}>X</button></>))}</div>
          </div>
        </div>
       </div>
        <div><Footer/></div>
   </div>
  )
}

export default Home