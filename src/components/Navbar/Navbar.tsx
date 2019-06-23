import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";

import "./navbar.css";

class NavbarComponent extends Component<RouteComponentProps, {}> {
  render() {
    const { push } = this.props.history
    return (
      <>
        <Navbar fixed="top" bg="dark" expand="lg">
          <Navbar.Brand style={{ color: "white" }} >
            Catalogue
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav>
              <Nav.Item 
                className="navbar__nav-item"
                onClick={() => push("/")} 
              >
                Home
              </Nav.Item>
              <Nav.Item 
                className="navbar__nav-item"
                onClick={() => push("/dashboard")} 
              >
                Dashboard
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="navbar__child-container">
          {this.props.children}
        </div>
      </>
    )
  }
}

export default withRouter(NavbarComponent);