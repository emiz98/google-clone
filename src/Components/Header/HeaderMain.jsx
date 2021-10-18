import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./headerMain.scss";

const HeaderMain = () => {
  return (
    <div className="headerMain">
      <div className="headerMain_left">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>
      <div className="headerMain_right">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <Apps />
        <Avatar src="https://avatars.githubusercontent.com/u/64089619?v=4" />
      </div>
    </div>
  );
};

export default HeaderMain;
