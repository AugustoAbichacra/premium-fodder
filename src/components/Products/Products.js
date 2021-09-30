import React from "react";
import Fade from "react-reveal/Fade";
import Carousel from "react-elastic-carousel";
import "./Products.css";

const items = [
  { id: 1, title: "img/fardos.webp" },
  { id: 2, title: "img/ladolfina.webp" },
  { id: 3, title: "img/fardos.webp" },
  { id: 4, title: "img/fardos.webp" },
  { id: 5, title: "img/fardos.webp" },
];

function Products() {
  return (
    <div className="products_container" id="products">
      <Fade left>
        <div className="products_left">
          <h1 className="products_left_title">Nuestras Formulaciones</h1>
          <div className="products_element">
            <p className="products_element_numeration">01</p>
            <div className="products_element_info">
              <h1 className="products_element_title">Max Fodder</h1>
              <p className="products_element_description">
                Deportes tipo endurance
              </p>
            </div>
          </div>
          <div className="products_element">
            <p className="products_element_numeration">02</p>
            <div className="products_element_info">
              <h1 className="products_element_title">Premium Max Fodder</h1>
              <p className="products_element_description">
                Deportes de media intensidad
              </p>
            </div>
          </div>
          <div className="products_element">
            <p className="products_element_numeration">03</p>
            <div className="products_element_info">
              <h1 className="products_element_title">Power Max</h1>
              <p className="products_element_description">
                Alto rendimiento
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <div className="products_carousel">
      <Fade left>
        <Carousel>
          {items.map((item) => (
            <img key={item.id} src={item.title} alt="imagen de productos"></img>
          ))}
        </Carousel>
        </Fade>
      </div>
    </div>
  );
}

export default Products;
