import React from "react";
import Fade from "react-reveal/Fade";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials_container" id="testimonials">
      <Fade bottom>
      <h1 className="testimonial_title">TESTIMONIALES</h1>
      </Fade>
      <Fade>
      <div className="testimonials_elements">
        <div className="testimonial_element">
          <img src="./img/clients/client1.png" alt="Testimonial 1" className="testimonial_element_img"></img>
          <div className="testimonial_element_info">
            <h2 className="testimonial_element_name">Adolfo Cambiaso</h2>
            <p className="testimonial_element_position">CFO La Dolfina</p>
            <FormatQuoteIcon className="quote"/><p className="testimonial_element_description">
              Los resultados obtenidos son impresionantes. El servicio que nos han brindado ha sido muy satisfactorio. Desde el comienzo acompañan el desarrollo del caballo, consiguiendo resultados impresionantes. 
            </p>
          </div>
        </div>
        <div className="testimonial_element">
          <img src="./img/clients/client2.png" alt="Testimonial 1" className="testimonial_element_img"></img>
          <div className="testimonial_element_info">
            <h2 className="testimonial_element_name">Pepe Riglos</h2>
            <p className="testimonial_element_position">CEO</p>
            <FormatQuoteIcon className="quote"/><p className="testimonial_element_description">
              Mas que conforme con los resultados de la dieta. Es 100% personalizada y es acompañada durante todo el proceso. Se ve reflejado en el desempeño del animal ya que ha mejorado significativamente.
            </p>
          </div>
        </div>
        <div className="testimonial_element">
          <img src="./img/clients/client3.png" alt="Testimonial 1" className="testimonial_element_img"></img>
          <div className="testimonial_element_info">
            <h2 className="testimonial_element_name">Maria Sanchez</h2>
            <p className="testimonial_element_position">Head Coach</p>
            <FormatQuoteIcon className="quote"/><p className="testimonial_element_description">
              El antes y el despues de los caballos es de no creer. La dieta y las formulaciones personalizadas dan resultados impresionantes. Gran compromiso por parte de Premium Fodder.
            </p>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Testimonials;