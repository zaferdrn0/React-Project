import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToDo from "../components/ToDo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const [baslikInput, setBaslikInput] = useState("");

  useEffect(() => {
    const getToDo = async () => {
      const response = await fetch("http://localhost:3001/getTodo", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();
      setTodos(data);
    };

    getToDo();
  }, []);

  function todoOlusturBtnHandle() {
    fetch("http://localhost:3001/createTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ baslik: baslikInput }),
      credentials: "include",
    });
  }

  function addTodo(baslik, todo) {
    setTodos((prev) => {
      let ToReturn = [...prev];
      let index = ToReturn.findIndex((todo) => todo.baslik === baslik);
      ToReturn[index].todoList.push(todo);
      return ToReturn;
    });
  }

  function deleteTodo(baslik, todo) {
    setTodos((prev) => {
      let ToReturn = [...prev];
      let index = ToReturn.findIndex((todo) => todo.baslik === baslik);
      ToReturn[index].todoList.splice(
        ToReturn[index].todoList.indexOf(todo),
        1
      );
      return ToReturn;
    });
  }

  return (
    <div>
      <div>
        <Header title="Sign Up" url="register" cikis="Cikis Yap" />
      </div>
      <div>
        <input
          onChange={(event) => {
            setBaslikInput(event.target.value);
          }}
        ></input>
        <button onClick={todoOlusturBtnHandle}>TodoOlustur</button>
      </div>
      <div className="todo">
        {todos.map((todo, index) => {
          return (
            <ToDo
              key={index}
              todoObj={todo}
              addTodoProps={addTodo}
              deleteTodoProps={deleteTodo}
              cagirBeni={setTodos}
            />
          );
        })}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
