import "./App.css";
import Home from "./components/Pages/Home/Home";
import Projects from "./components/Pages/Projects/Projects";
import Animations from "./components/Pages/Credits/Credits";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/credits">
          <Animations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
