import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EcoIcon from "@material-ui/icons/Eco";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [prueba, setPrueba] = useState(false);

  const propat = () => {
    setPrueba(!prueba);
  };

  let location = window.location.pathname;
  let locationVerify = false;

  if (location === "/galeria" || location === "/sobre-nosotros") {
    locationVerify = true;
  } else {
    locationVerify = false;
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.addEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <div className="navbar_logo">
        {locationVerify ? (
          <LinkRouter to="/" className="router">
            <EcoIcon className="navbar_img" />
          </LinkRouter>
        ) : (
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <EcoIcon className="navbar_img" />
          </Link>
        )}
      </div>
      <div className="navbar_elements">
        <ul className="navbar_list">
          {locationVerify ? (
            <a href="/#about" className="router">
              <li className="navbar_list_item">SOBRE NOSOTROS</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="navbar_list_item">SOBRE NOSOTROS</li>
            </Link>
          )}
          {locationVerify ? (
            <a href="/#services" className="router">
              <li className="navbar_list_item">SERVICIOS</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="navbar_list_item">SERVICIOS</li>
            </Link>
          )}
          {locationVerify ? (
            <a href="/#products" className="router">
              <li className="navbar_list_item">PRODUCTOS</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="navbar_list_item">PRODUCTOS</li>
            </Link>
          )}
          {locationVerify ? (
            <a href="/#testimonials" className="router">
              <li className="navbar_list_item">TESTIMONIALES</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="navbar_list_item">TESTIMONIALES</li>
            </Link>
          )}
          <LinkRouter to="/galeria" className="router">
            <li className="navbar_list_item" onClick={propat}>
              GALERIA
            </li>
          </LinkRouter>
        </ul>
      </div>
      <MenuIcon className="icono_menu" onClick={() => setBurgerStatus(true)} />
      <SideBar show={burgerStatus} className="sidebar">
        <CloseIcon
          className="icono_close"
          onClick={() => setBurgerStatus(false)}
        />
        <ul className="sidebar_list">
          {locationVerify ? (
            <LinkRouter to="/" className="router">
              <li className="sidebar_list_element">MENU</li>
            </LinkRouter>
          ) : (
            <></>
          )}
          {locationVerify ? (
            <a href="/#about" className="router">
              <li className="sidebar_list_element">SOBRE NOSOTROS</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="sidebar_list_element">SOBRE NOSOTROS</li>
            </Link>
          )}
          {locationVerify ? (
            <a href="/#services" className="router">
              <li className="sidebar_list_element">SERVICIOS</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="sidebar_list_element">SERVICIOS</li>
            </Link>
          )}
          {locationVerify ? (
            <a href="/#products" className="router">
              <li className="sidebar_list_element">PRODUCTOS</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="sidebar_list_element">PRODUCTOS</li>
            </Link>
          )}
          {locationVerify ? (
            <a href="/#testimonials" className="router">
              <li className="sidebar_list_element">TESTIMONIALES</li>
            </a>
          ) : (
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="sidebar_list_element">TESTIMONIALES</li>
            </Link>
          )}
          <LinkRouter to="/galeria" className="router">
            <li className="sidebar_list_element">GALERIA</li>
          </LinkRouter>
        </ul>
      </SideBar>
    </div>
  );
}

export default NavBar;

const SideBar = styled.div`
  transition: transform 0.2s ease-in;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(400px)")};
`;
