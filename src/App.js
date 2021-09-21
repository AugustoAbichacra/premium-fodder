import './App.css';
import { NavBar, Home, AboutUs, Clients, Services, Products, Testimonials, Contact, Footer } from "./components/index"

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <AboutUs/>
      <Clients/>
      <Services/>
      <Products/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
