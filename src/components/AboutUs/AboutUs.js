import React from "react";
import "./AboutUs.css";
import Fade from "react-reveal/Fade";

function AboutUs() {
  return (
    <div className="aboutus_container" id="about">
      <div className="aboutus_left">
        <img src="./img/aboutus_img.jpeg" className="aboutus_img" alt="Imagen Sobre Nosotros"></img>
      </div>
      <div className="aboutus_right">
        <Fade>
          <h1 className="aboutus_title">Sobre Nosotros</h1>
          <p className="aboutus_info">Somos una empresa dedicada a la nutrición equina para deportes de alta competencia desde hace más de 10 años. </p>
          <button className="aboutus_button">Leer Más</button>
        </Fade>
      </div>
    </div>
  );
}

export default AboutUs;
