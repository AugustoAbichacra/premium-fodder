import React from "react";
import AboutUsSection from "./AboutUsSection";
import Fade from "react-reveal/Fade";
import "./AboutUsView.css";

const informacion = [
  {
    titulo: "Trayectoria",
    texto:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
    posicion: "left",
    image: "img/bale.png",
  },
  {
    titulo: "Trayectoria",
    texto:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
    posicion: "right",
    image: "img/bale.png",
  },
  {
    titulo: "Trayectoria",
    texto:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
    posicion: "left",
    image: "img/bale.png",
  },
];
function AboutUsView() {
  return (
    <div className="about-us_father">
      <Fade delay={500}>
        {informacion.map((element, i) => (
          <AboutUsSection
            key={i}
            position={element.posicion}
            title={element.titulo}
            text={element.texto}
            image={element.image}
          />
        ))}
      </Fade>
    </div>
  );
}

export default AboutUsView;
