import Footer from "../components/Footer";
import Header from "../components/Header";
import ToDo from "../components/ToDo";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ToDo label="okul" />
      </div>
      <div>
        <ToDo label="is" />
      </div>
      <div>
        <ToDo label="gunluk" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
