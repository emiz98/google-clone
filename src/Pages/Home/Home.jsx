import Footer from "../../Components/Footer/Footer";
import HeaderMain from "../../Components/Header/HeaderMain";
import Search from "../../Components/Search/Search";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./home.scss";
import { Mic } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

//TODO  react-speech-recognition
//* https://www.npmjs.com/package/react-speech-recognition

const Home = () => {
  const textInput = useRef(null);
  const [{ OverlayActive }, dispatch] = useStateValue();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // https://codepen.io/dghez/pen/VvYaWq

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    if (OverlayActive) {
      // setTimeout(() => {}, 2000);
      SpeechRecognition.startListening();
      textInput.current.innerText = transcript;
      setTimeout(() => {
        SpeechRecognition.stopListening();
        dispatch({
          type: actionTypes.SET_OVERLAY,
          OverlayActive: false,
        });
        dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term: transcript,
        });
      }, 5000);
    }
  }, [transcript, OverlayActive]);

  return (
    <div className="home">
      {/* <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p> */}
      {OverlayActive ? (
        <div className="search_overlay">
          <div ref={textInput} className="search_overlay_left">
            Speak now
          </div>
          <div className="search_overlay_right">
            <Mic />
          </div>
        </div>
      ) : (
        <>
          <HeaderMain />

          <div className="home_body">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt=""
            />
            <Search value={transcript} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
