import { Button } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import "./search.scss";

const Search = ({ value, hideButtons = false }) => {
  const [{ OverlayActive, term }, dispatch] = useStateValue();
  const history = useHistory();
  const [Input, setInput] = useState(value);

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: Input,
    });
    dispatch({
      type: actionTypes.SET_PAGE_NUM,
      PageNum: 0,
    });

    history.push("/search");
  };

  const triggerOverlay = () => {
    dispatch({
      type: actionTypes.SET_OVERLAY,
      OverlayActive: true,
    });
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchOutlined className="search_inputIcon" />
        <input
          placeholder={term}
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img
          className="search_input_mic"
          src="./mic.png"
          onClick={triggerOverlay}
          alt="mic"
        />
      </div>
      {!hideButtons ? (
        <>
          <div className="search_buttons">
            <Button onClick={search} type="submit" variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
          <center>
            <div className="search_offered">
              Google offered in: <span>සිංහල</span> <span>தமிழ்</span>
            </div>
          </center>
        </>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttons_hidden"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttons_hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
