import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [data, setData] = useState([]);
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=FaM2S61TschjDYQGiFUfpUdDFZz3Be0BZJWDUzeu";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="phrase">
            <h5>EXPLORE THE</h5>
            <h5>EXTRAORDINARY, </h5>
            <h5>EVERYDAY </h5>
          </div>
        </div>
        <div className="scroll">
          <p>Scroll down</p>
          <img className="bounce" src={require('../../assets/down-caret.png')} />
        </div>
      </div>

      <div className="about container">
        <h1 className="about-title">About Stellar Space</h1>
        <div className="about-info">
          <p>Stellar Space in a space website where you can learn all about the universe and what goes on where your eyes cannot see or reach.
            We have taken the liberty to bring all of outer space directly to your living room.
          </p>

          <div className="content">
            <div className="content-item">
            <h5>Mars Weather</h5>
            <p>Learn about the weather conditions in the planet Mars.</p>
            </div>
            <div className="content-item">
            <h5>Asteroids Map</h5>
            <p>View all objects floating in the milky way universe.</p>
            </div>
            <div className="content-item">
            <h5>Mars Photos</h5>
            <p>View 100+images taken by Rovers exploring planet Mars.</p>
            </div>
            <div className="content-item">
            <h5>NEO</h5>
            <p>See a list of objects that come close to the planet you are currently living on.</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="pod-wrapper">
        <div className="container">
      <div className="first">
        <p>Title : {data.title}</p>
        <p>Date : {data.date}</p>
        <h5>Explanation</h5>
        <p>{data.explanation}</p>
      </div>
      <h4 className="pod">Picture of the day</h4>
      </div>
      <img className="image" src={data.url} alt="picture of the day" />
      </div>
    </>
  );
}

export default HomePage;
