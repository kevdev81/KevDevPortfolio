import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  state = {
    toggle: false,
    menu: "bars"
  };

  toggle = () => {
    this.setState(prevState => {
      let menu;
      if (prevState.toggle) menu = "bars";
      else menu = "times";
      return {
        menu,
        toggle: !prevState.toggle
        
      };
    });
  };

 
  
  render() {
    
    return (
      <header>
        <div className="btn-container" onClick={this.toggle}>
          <FontAwesomeIcon
            className={`btn-bars ${this.state.toggle}`}
            icon={`${this.state.menu}`}
            size="lg"
          />
        </div>
        <nav className={`navbar ${this.state.toggle}`}>
          <div className={`navbar-profile ${this.state.toggle}`}>
            <div className="portrait" />
          </div>
          <ul className={`navbar-nav ${this.state.toggle}`}>
            <li className={`nav-item ${this.state.toggle}`}>
              <NavLink exact to="/"  className="nav-link" activeClassName='active' onClick={this.toggle}>
                {" "}
                Home{" "}
              </NavLink>

            </li>
            <li className={`nav-item ${this.state.toggle}`}>
              <NavLink to="/mywork" className="nav-link" activeClassName='active' onClick={this.toggle}>
                My Work
              </NavLink>
            </li>
            <li className={`nav-item ${this.state.toggle}`}>
              
              <NavLink to="/about" className="nav-link" activeClassName='active' onClick={this.toggle}>
                {" "}
                About Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
