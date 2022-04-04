import "./layout.css";
import logo from "../assets/images/logo.png";
import bgimg from "../assets/images/background.png";
import line from "../assets/images/line.png";

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <img className="bg" src={bgimg} alt="logo" />

        <div className="first-heading">
          <a href="https://aviyel.com/">
            <img className="logo-image" src={logo} alt="" />
          </a>
        </div>

        <div className="second-heading">
          <h1>Wall of Fame</h1>
        </div>

        <div className="third-heading">
          <p>Featuring contributions by the Aviyel Community!</p>
        </div>
        <div className="line-image">
          <img src={line} alt="" />
        </div>
      </div>
    </>
  );
};

export default Layout;
