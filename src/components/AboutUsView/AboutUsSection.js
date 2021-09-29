import React from "react";
import "./AboutUsView.css";

function AboutUsSection({ position, text, image, title }) {
  return (
    <div className="about-us-view_container">
      <div className="about-us-view_elements">
        {position === "left" ? (
          <div className="about-us-view_element">
            <img
              src={image}
              className="about-us-view_image"
              alt="imagen sobre nosotros"
            ></img>
            <div className="about-us-view_element_information">
              <h2 className="about-us-view_title">{title}</h2>
              <p className="about-us-view_text"> {text}</p>
            </div>
          </div>
        ) : (
          <div className="about-us-view_element div_blanco">
            <div className="about-us-view_element_information">
              <h2 className="about-us-view_title">{title}</h2>
              <p className="about-us-view_text"> {text}</p>
            </div>
            <img
              src={image}
              className="about-us-view_image"
              alt="imagen sobre nosotros"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUsSection;
