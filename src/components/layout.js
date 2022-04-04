import "./layout.css";
import logo from "../assets/images/logo.png";


const Layout = () => {
  return (
    <>
      <div className="wrapper">
        

        <div className="first-heading">
          <a href="https://aviyel.com/">
            <img className="logo-image" src={logo} alt="" />
          </a>
        </div>

        <div className="second-heading">
          <h1>Request Board</h1>
        </div>

        <div className="third-heading">
       
        </div>
        
      </div>
    </>
  );
};

export default Layout;
