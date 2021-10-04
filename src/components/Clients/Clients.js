import React from 'react'
import Fade from "react-reveal/Fade";
import "./Clients.css"

function Clients() {
    return (
        <div className="clients_container">
            <Fade >
            <h1 className="clients_title">NUESTROS CLIENTES</h1>
            <p className="clients_info">Desde el inicio brindamos la mejor  <span style={{fontWeight:"bold"}}>  asesoría </span> y desarrollamos la  <span style={{fontWeight:"bold"}}> dieta requerida </span>para cada necesidad <br></br> Algunos de nuestros clientes:</p>
            </Fade>
            <Fade left>
            <div className="clients_cards">
                <div className="client_card">
                    <img className="client_img" alt="Imagen Cliente 1" src="./img/clients/ladolfina.webp"></img>
                    <h3 className="client_name">La Dolfina</h3>
                </div>
                <div className="client_card">
                    <img className="client_img" alt="Imagen Cliente 1" src="./img/fardos.webp"></img>
                    <h3 className="client_name">Tortugas Polo Club</h3>
                </div>
                <div className="client_card">
                    <img className="client_img" alt="Imagen Cliente 1" src="./img/aboutus_img.webp"></img>
                    <h3 className="client_name">La Santa Polo</h3>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Clients
