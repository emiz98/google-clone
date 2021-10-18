import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_row1">Sri Lanka</div>
      <hr />
      <div className="footer_row2">
        <div className="footer_row2_left">
          <span>About</span>
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search Works</span>
        </div>
        <div className="footer_row2_right">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
