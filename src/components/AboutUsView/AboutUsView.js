import React from "react";
import AboutUsSection from "./AboutUsSection";
import Fade from "react-reveal/Fade";
import "./AboutUsView.css";

const text =
  "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.";
const image = "img/bale.png"
function AboutUsView() {
  return (
    <div className="about-us_father">
      <Fade left delay={500}>
        <AboutUsSection position="left" text={text} image={image}/>
      </Fade>
      <Fade right delay={500}>
        <AboutUsSection position="right" text={text} image={image} color="white"/>
      </Fade>
      <Fade left delay={500}>
        <AboutUsSection position="left" text={text} image={image}/>
      </Fade>
    </div>
  );
}

export default AboutUsView;
