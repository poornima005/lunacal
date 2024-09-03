import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import '../App.css';
const Home = () => {
  return (
    <div className="home-container">
      <div className="icon-container">
        <FaRegQuestionCircle size={25} className="icon" />
        <BiGridVertical size={34} className="icon icon-relative" />
      </div>
      <div className="content-container">
        <div className="button-group">
          {["About Me", "Experiences", "Recommended"].map((text) => (
            <button key={text} className="btn">
              {text}
            </button>
          ))}
        </div>
        <div className="description">
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY and have been living in Santa Carla for the
            past 10 years with my wife Tiffany and my 4-year-old twin daughters,
            Emma and Ella. Both of them are just starting school, so my calendar
            is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
