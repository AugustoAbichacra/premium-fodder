import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EcoIcon from "@material-ui/icons/Eco";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  const [burgerStatus, setBurgerStatus] = useState(false);

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
        <a href="./" className="router">
          <EcoIcon className="navbar_img" />
        </a>
      </div>
      <div className="navbar_elements">
        <ul className="navbar_list">
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
          <LinkRouter to="/galeria" className="router">
            <li className="navbar_list_item">GALERIA</li>
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
