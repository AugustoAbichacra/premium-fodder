import React from "react";
import "./AboutUs.css";
import Fade from "react-reveal/Fade";
import { Link as LinkRouter } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutus_container" id="about">
      <div className="aboutus_left">
        <img src="./img/aboutus_img.webp" className="aboutus_img" alt="Alimento caballos"></img>
      </div>
      <div className="aboutus_right">
        <Fade>
          <h1 className="aboutus_title">Sobre Nosotros</h1>
          <p className="aboutus_info">Somos una empresa dedicada a la <span style={{fontWeight:"bold"}}> nutrición equina </span> para deportes de alta competencia desde hace más de 10 años. Nos encargamos de producir el  <span style={{fontWeight:"bold"}}> alimento adecuado </span> y acompañar todo el desarrolo del animal.</p>
          <LinkRouter to="/sobre-nosotros" className="router">
          <button className="aboutus_button">Leer Más</button>
          </LinkRouter>
        </Fade>
      </div>
    </div>
  );
}

export default AboutUs;
