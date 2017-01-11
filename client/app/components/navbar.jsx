"use strict";

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export function MyNavBar(props) {

  const navbarInstance = (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Portland Bicycle Theft</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavDropdown eventKey={3} title="Project Code" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="https://github.com/Zak-Kent/reactBicycleProject" target="_blank">Frontend</MenuItem>
            <MenuItem eventKey={3.2} href="https://github.com/Zak-Kent/Bicycle_theft_API" target="_blank">Backend - API</MenuItem>
            <MenuItem eventKey={3.3} href="https://github.com/Zak-Kent/Bicycle_theft_project" target="_blank">Data prep/process</MenuItem>
            <MenuItem divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  return (
    <div>
      { navbarInstance }
    </div>
  );
}



