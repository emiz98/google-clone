import SearchResults from "../../Components/SearchResults/SearchResults";
import HeaderSub from "../../Components/Header/HeaderSub";
import "./searchPage.scss";
import KnowledgePanel from "../../Components/KnowledgePanel/KnowledgePanel";
import Footer from "../../Components/Footer/Footer";
import { useStateValue } from "../../StateProvider";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Mic } from "@material-ui/icons";
import Pagination from "../../Components/Pagination/Pagination";
import response from "./response";
import kp from "./kp";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { actionTypes } from "../../reducer";

const SearchPage = () => {
  const [{ term, PageNum, OverlayActive }, dispatch] = useStateValue();
  const [Data, setData] = useState([]);
  const textInput = useRef(null);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  // const [Time, setTime] = useState(1);

  const testData = response;
  const kpData = kp;

  useEffect(() => {
    var startTime = performance.now();
    setData(testData);
    // const req = axios
    //   .get(
    //     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=017576662512468239146:omuauf_lfve&q=${term}
    //   `
    //   )
    //   .then((res) => {
    //     var endTime = performance.now();
    //     setData(res);
    //     setTime(parseFloat((endTime - startTime) / 1000).toFixed(2));
    //   });
  }, [term]);

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
    <div className="searchPage">
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
          <HeaderSub />
          <div className="searchPage_content">
            <div className="searchPage_left">
              <SearchResults
                data={Data.items}
                searchInfo={Data.searchInformation}
                term={term}
              />
              <Pagination />
            </div>
            <div className="searchPage_right">
              <KnowledgePanel data={kpData} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default SearchPage;
