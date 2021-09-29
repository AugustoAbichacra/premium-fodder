import "./App.css";
import Main from "./views/Main";
import Galeria from "./views/Galeria";
import AboutUs from "./views/AboutUs"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import {ScrollToTop} from "./js/app"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/sobre-nosotros" component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
