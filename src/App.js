import Home from "./page/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Product from "./page/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element = {<Product/>}/>
        <Route path="/" element ={<Home/>}/>
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
