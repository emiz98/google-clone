import SearchResults from "../../Components/SearchResults/SearchResults";
import HeaderSub from "../../Components/Header/HeaderSub";
import "./searchPage.scss";
import KnowledgePanel from "../../Components/KnowledgePanel/KnowledgePanel";
import Footer from "../../Components/Footer/Footer";
import { useStateValue } from "../../StateProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../Components/Pagination/Pagination";
import response from "./response";
import kp from "./kp";

const SearchPage = () => {
  const [{ term, PageNum }, dispatch] = useStateValue();
  const [Data, setData] = useState([]);
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

  return (
    <div className="searchPage">
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
    </div>
  );
};

export default SearchPage;
