import "./cards.css";
import { Data } from "./data";
import b1 from "../assets/images/b1.svg";
import b2 from "../assets/images/b2.svg";
const CardCollection = () => {
  return (
    <>
      <div className="parent">
        {Data.map((item) => (
          <Card
            image={item.pic}
            title={item.title}
            name={item.Name}
            desc={item.desc}
            
          />
        ))}
      </div>
    </>
  );
};

const Card = ({ image, title, name, desc }) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img className="card-image" src={image} alt="" />
        
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{desc}</p>

          <div className="card-button">
            <span className="b1">
              <img src={b1} alt="" />
              <a link href="#">
                Issue link
              </a>
            </span>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCollection;
