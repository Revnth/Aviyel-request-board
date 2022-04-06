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
            projectImageURL={item.projectImageURL}
            issueShortDesc={item.issueShortDesc}
            projectName={item.projectName}
            issueLongDesc={item.issueLongDesc}
            issueURL={item.issueURL}
          />
        ))}
      </div>
    </>
   
   
  );
};

const Card = ({ projectImageURL, issueShortDesc, projectName, issueLongDesc,issueURL}) => {
  return (

    <a href={issueURL} target="_blank">
      <div className="card">
        <div className="image">
          <img className="card-image" src={projectImageURL} alt="" />
        </div>
        <div className="card-content">
          <h3>{projectName}</h3>
          <h4>{issueShortDesc}</h4>
          <p>{issueLongDesc}</p>


        </div>
      </div>
      </a>
  
  );
};

export default CardCollection;
