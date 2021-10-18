import Footer from "../../Components/Footer/Footer";
import HeaderMain from "../../Components/Header/HeaderMain";
import Search from "../../Components/Search/Search";
import "./home.scss";

//TODO  react-speech-recognition
//* https://www.npmjs.com/package/react-speech-recognition

const Home = () => {
  return (
    <div className="home">
      <HeaderMain />
      <div className="home_body">
        {/* https://codepen.io/dghez/pen/VvYaWq */}
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
