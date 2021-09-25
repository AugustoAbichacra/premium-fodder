import React from "react";
import {
  Home,
  AboutUs,
  Clients,
  Services,
  Products,
  Testimonials,
  Contact,
} from "../components/index"

function Main() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Clients />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Main;
