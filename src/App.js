import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGlobe, faBars, faTimes);

class App extends React.Component {
  render() {
    return (
      <div className="welcome">
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={AboutMe} />
          <Route path="/mywork" component={MyWork} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const queryString = require("query-string");

const params = queryString.parse(document.location.search);
const redirect = params.redirect;
if (document.location.pathname === "/" && redirect) {
  document.location.assign(`${document.location.origin}/${redirect}`);
}

export default App;
