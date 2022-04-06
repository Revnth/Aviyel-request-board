import "./cards.css";
import b1 from "../assets/images/b1.svg";
import b2 from "../assets/images/b2.svg";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Data from "./data";

const CardCollection = () => {

  return (
    
     <>
      <div  className="parent">
        {Data.map((item) => (
          
          <Card
            image={item.pic}
            title={item.title}
            name={item.Name}
            desc={item.desc}
            url={item.url}
          />
        ))}
      </div>
    </>
   
   
  );
};

const Card = ({ image, title, name, desc,url}) => {
  return (

    <a href={url} target="_blank">
      <div className="card">
        <div className="image">
          <img className="card-image" src={image} alt="" />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{desc}</p>


        </div>
      </div>
      </a>
  
  );
};

export default CardCollection;
