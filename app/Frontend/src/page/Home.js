import Footer from "../components/Footer";
import Header from "../components/Header";
import ToDo from "../components/ToDo";

const Home = () => {
  return (
    <div>
      <div>
        <Header title = "Sign Up" url ="register"/>
      </div>
      <div className="kapsam"><div>
        <ToDo label="okul" />
      </div>
      <div>
        <ToDo label="is" />
      </div>
      <div>
        <ToDo label="gunluk" />
      </div></div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
