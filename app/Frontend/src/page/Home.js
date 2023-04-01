import Footer from "../components/Footer";
import Header from "../components/Header";
import ToDo from "../components/ToDo";

const Home = () => {
  return (
    <div>
      <div>
        <Header title = "Sign Up" url ="register"/>
      </div>
    <div>
        <ToDo label="To Do App" />
      </div>
     
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
