import React from "react";
import Fade from "react-reveal/Fade";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials_container" id="testimonials">
      <Fade bottom>
      <h1 className="testimonial_title">Testimoniales</h1>
      </Fade>
      <Fade>
      <div className="testimonials_elements">
        <div className="testimonial_element">
          <img src="./img/clients/client1.webp" alt="Testimonial 1" className="testimonial_element_img"></img>
          <div className="testimonial_element_info">
            <h2 className="testimonial_element_name">Juan Villalba</h2>
            <p className="testimonial_element_position">CEO</p>
            <FormatQuoteIcon className="quote"/><p className="testimonial_element_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum i
            </p>
          </div>
        </div>
        <div className="testimonial_element">
          <img src="./img/clients/client1.webp" alt="Testimonial 1" className="testimonial_element_img"></img>
          <div className="testimonial_element_info">
            <h2 className="testimonial_element_name">Juan Villalba</h2>
            <p className="testimonial_element_position">CEO</p>
            <FormatQuoteIcon className="quote"/><p className="testimonial_element_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum i
            </p>
          </div>
        </div>
        <div className="testimonial_element">
          <img src="./img/clients/client1.webp" alt="Testimonial 1" className="testimonial_element_img"></img>
          <div className="testimonial_element_info">
            <h2 className="testimonial_element_name">Juan Villalba</h2>
            <p className="testimonial_element_position">CEO</p>
            <FormatQuoteIcon className="quote"/><p className="testimonial_element_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum i
            </p>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Testimonials;
