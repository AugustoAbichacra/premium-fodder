import React from "react";
import AboutUsSection from "./AboutUsSection";
import Fade from "react-reveal/Fade";
import "./AboutUsView.css";

const informacion = [
  {
    titulo: "¿QUIENES SOMOS?",
    texto:
      "Somos una empresa fundada en 2008 dedicada a la nutrición equina para deportes de alta competencia. Cada formulación que hacemos es pensada individualmente para cada caballo y el deporte realizado. Nos aseguramos de llevar al animal al 100% de su rendimiento",
    posicion: "left",
    image: "img/bale2.png",
  },
  {
    titulo: "¿QUE HACEMOS?",
    texto:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
    posicion: "right",
    image: "img/seeds.png",
  },
  {
    titulo: "¿COMO LO HACEMOS?",
    texto:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
    posicion: "left",
    image: "img/herradura.png",
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
