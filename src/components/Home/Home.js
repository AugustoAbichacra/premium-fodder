import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <div className="home_container" id="home">
      <div className="home_banner">
        <Fade bottom>
          <h1 className="home_title">
            Premium <span className="home_title_span">Fodder</span>
          </h1>
        </Fade>
        <Fade left>
          <p className="home_description">En busqueda de la excelencia</p>
        </Fade>
        <Fade right>
          <div className="home_buttons">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="home_button">
                <span className="home_button_text">Contactenos</span>
                <NavigateNextIcon className="icono" />
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
