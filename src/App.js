import "./App.css";
// import { NavBar, Home, AboutUs, Clients, Services, Products, Testimonials, Contact, Footer } from "./components/index"
import Main from "./views/Main";
import Galeria from "./views/Galeria";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/galeria">
            <Galeria></Galeria>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Router>
      {/* <NavBar />
      <Home />
      <AboutUs/>
      <Clients/>
      <Services/>
      <Products/>
      <Testimonials/>
      <Contact/>
      <Footer /> */}
    </div>
  );
}

export default App;
