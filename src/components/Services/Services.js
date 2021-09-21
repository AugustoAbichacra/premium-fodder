import React from 'react'
import Fade from "react-reveal/Fade";
import "./Services.css"

function Services() {
    return (
        <div className="services_container" id="services">
            <Fade left>
                <div className="services_left">
                    <h1 className="services_left_title">Nuestros Servicios</h1>
                    <img src="./img/fardos.jpeg" alt="Imagen Servicios" className="services_img"></img>
                </div>
            </Fade>
            <Fade right>
                <div className="services_right">
                   <div className="services_element">
                       <p className="services_element_numeration">01</p>
                       <div className="services_element_info">
                           <h1 className="services_element_title">Consultoria</h1>
                           <p className="services_element_description">Realizamos la consultoria de toda la dieta</p>
                       </div>
                   </div>
                   <div className="services_element">
                       <p className="services_element_numeration">02</p>
                       <div className="services_element_info">
                           <h1 className="services_element_title">Preparación</h1>
                           <p className="services_element_description">Encargados de preparar lo mejor para cada individuo</p>
                       </div>
                   </div>
                   <div className="services_element">
                       <p className="services_element_numeration">03</p>
                       <div className="services_element_info">
                           <h1 className="services_element_title">Desarrollo</h1>
                           <p className="services_element_description">Acompañamos el desarrollo de todo el proceso</p>
                       </div>
                   </div>
                </div>
            </Fade>
        </div>
    )
}

export default Services
