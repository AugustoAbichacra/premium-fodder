import React from "react";
import {
  NavBar,
  Home,
  AboutUs,
  Clients,
  Services,
  Products,
  Testimonials,
  Contact,
  Footer,
} from "../components/index"

function Main() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutUs />
      <Clients />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
