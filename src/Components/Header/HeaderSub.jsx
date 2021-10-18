import { Link } from "react-router-dom";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  OndemandVideoOutlined,
  Room,
  SearchOutlined,
} from "@material-ui/icons";
import Search from "../Search/Search";
import "./headerSub.scss";

const HeaderSub = () => {
  return (
    <div className="headerSub">
      <div className="searchResults_header">
        <Link to="/">
          <img
            className="searchResults_logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="gimage"
          />
        </Link>
        <div className="searchResults_header_search">
          <Search hideButtons />
          <div className="searchResults_options">
            <div className="options_left">
              <div className="option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="option">
                <OndemandVideoOutlined />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="option">
                <Description />
                <Link to="/news">News</Link>
              </div>

              <div className="option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="options_right">
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSub;
