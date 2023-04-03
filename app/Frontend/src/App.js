import Home from "./page/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login";

fetch("http://localhost:3001/deleteToDo", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        
      }
    });

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/" element ={<Home/>}/>
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
