import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider";
import "./searchResults.scss";

const SearchResults = ({ data, searchInfo, term }) => {
  console.log(data);
  return (
    <div className="searchResults">
      {true && (
        <div className="searchResults_results">
          <p className="results_count">
            About {searchInfo?.formattedTotalResults} results (
            {searchInfo?.formattedSearchTime} seconds) for
            {term}
          </p>

          {data?.map((item) => (
            <div className="searchPage_result" key={item.cacheId}>
              <a href={item.link}>
                {/* <img
                  src={item.favicons.low_res}
                  className="searchPage_result_image"
                /> */}
                <span className="searchPage_result_url">
                  {item.link.split("/")?.[2] +
                    new URL(item.link).pathname.split("/").join(" › ")}
                </span>
              </a>
              <a className="searchPage_result_title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_result_snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
