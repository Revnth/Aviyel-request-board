import "./cards.css";
import b1 from "../assets/images/b1.svg";
import b2 from "../assets/images/b2.svg";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";


const CardCollection = () => {
  const organizations = ['typesense', 'google', 'facebook', 'flipkart', 'linkedin','microsoft','samsung','apple'   ];
  const [state, setState] = useState([]);

  const getData = async () => {
    // for ( let i = 0; i < organizations.length; i++ ) {
    // const response = await axios(`https://api.github.com/orgs/${organizations[i]}`);
    // console.log(response?.data?.avatar_url);
    // setState([...state, response?.data?.avatar_url])
    // // setState();
    //   // state.push(response?.data?.avatar_url);

    // }
    let promises = organizations.map(organization => axios.get(`https://api.github.com/orgs/${organization}`) )
    let responses = await Promise.all(promises)
    let urls = responses?.map(r => (r?.data?.avatar_url))
    setState(urls)
  };
  useEffect(() => {
    getData();
  }, []);

  const Data = [
    {
      pic: state[0],
      Name: "Project Name",
      url:"#",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use",
    },
    {
      pic: state[1],
      url:"#",
      Name: "Project Name",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use",
    },
    {
      pic:state[2],
      url:"#",

      Name: "Project Name",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use",
    },
    {
      pic: state[3],
      url:"#",

      Name: "Project Name",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use",
    },
    {
      pic: state[4],
      url:"#",

      Name: "Project Name",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use",
    },
    {
      pic: state[5],
      url:"#",

      Name: "Project Name",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use",
    },
    {
      pic: state[6],
      url:"#",

      Name: "Project Name",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use",
    },
    {
      pic: state[7],
      url:"#",

      Name: "Project Name",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use ",
    },
  ];

  return (
    <a href="#">
      <div  className="parent">
        {Data.map((item) => (
          <Card
            image={item.pic}
            title={item.title}
            name={item.Name}
            desc={item.desc}
          />
        ))}
      </div>
    </a>
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

          {/* <div className="card-button">
            <span className="b1">
              <img src={b1} alt="" />
              <a link href="#">
                Issue link
              </a>
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CardCollection;
