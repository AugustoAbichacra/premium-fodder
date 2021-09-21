import React from "react";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Fade from "react-reveal/Fade";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_container">
      <Fade>
        <div className="contact_social_media">
          <div className="contact_element_container">
            <div className="icon_container">
              <LocalPhoneIcon className="icon" />
            </div>
            <div className="contact_element_description_container">
              <p className="contact_description">Tel:</p>
              <p className="contact_phone">+54 11 6708 2222</p>
            </div>
          </div>
          <div className="contact_element_container">
            <div className="icon_container">
              <EmailIcon className="icon" />
            </div>
            <div className="contact_element_description_container">
              <p className="contact_description">Mail:</p>
              <p className="contact_mail">javaujo@hotmail.com</p>
            </div>
          </div>
          <div className="contact_element_container">
            <div className="icon_container">
              <LocationOnIcon className="icon" />
            </div>
            <div className="contact_element_description_container">
              <p className="contact_description">Ubicacion:</p>
              <p className="contact_location">
                Rio Hondo 500, Manzanares, Pilar.
              </p>
            </div>
          </div>
        </div>
        <div className="contact_form_container">
          <h1 className="contact_form_title">CONTACTO</h1>
          <form className="contact_form">
            <div className="contact_input_info">
              <label htmlFor="nombre" className="form_label">
                Nombre
              </label>
              <input
                className="form_input"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
              ></input>
            </div>
            <div className="contact_input_info">
              <label htmlFor="mail" className="form_label">
                Mail
              </label>
              <input
                className="form_input"
                id="mail"
                name="mal"
                type="text"
                placeholder="Mail"
              ></input>
            </div>
            <div className="contact_input_info">
              <label htmlFor="telefono" className="form_label">
                Telefono
              </label>
              <input
                className="form_input"
                id="telefono"
                name="telefono"
                type="text"
                placeholder="Telefono"
              ></input>
            </div>
            <div className="contact_input_info contact_textarea">
              <label htmlFor="mensaje" className="form_label">
                Mensaje
              </label>
              <textarea
                className="form_input"
                id="mensaje"
                name="mensaje"
                type="text"
                placeholder="Mensaje"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn_enviar">
              Enviar
            </button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;
