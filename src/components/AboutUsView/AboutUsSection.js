import React from "react";
import "./AboutUsView.css";

function AboutUsSection({ position, text, image, color }) {
  return (
    <div className="about-us-view_container">
      <div className="about-us-view_elements">
        {position === "left" ? (
          <div className="about-us-view_element">
           <img src={image} className="about-us-view_image"></img>
           <p className="about-us-view_text"> {text}</p>
          </div>
        ) : (
            <div className="about-us-view_element div_blanco">
             <p className="about-us-view_text"> {text}</p>
             <img src={image} className="about-us-view_image"></img>
           </div>
        )}
      </div>
    </div>
  );
}

export default AboutUsSection;
