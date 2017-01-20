"use strict";

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Popover, OverlayTrigger } from 'react-bootstrap';



const popoverBottom = (
  <Popover id="popover-positioned-scrolling-bottom" title="Project Description">
    This repo is a collection of scripts that were used to clean data and build a spatially aware database 
    that helps calculate the rate of theft at city owned bicycle racks in Portland. This database includes open 
    source bicycle theft data from the City of Portland and .shp file data from Portland Atlas. The scripts are a 
    combination of SQL using PostGIS functionality, and Python. Below is a brief description of the project.
  </Popover>
);

const mapKeyPopoverBottom = (
  <Popover id="popover-positioned-scrolling-bottom" title="Map Key">
    This repo is a collection of scripts that were used to clean data and build a spatially aware database 
    that helps calculate the rate of theft at city owned bicycle racks in Portland
  </Popover>
);

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
          <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverBottom}>
            <NavItem eventKey={1} href="#">About</NavItem>
          </OverlayTrigger>
          <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={mapKeyPopoverBottom}>
            <NavItem eventKey={2} href='#'>Map Key</NavItem>
          </OverlayTrigger>
          <NavDropdown eventKey={3} title="Project Code" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="https://github.com/Zak-Kent/reactBicycleProject" target="_blank">Frontend</MenuItem>
            <MenuItem eventKey={3.2} href="https://github.com/Zak-Kent/Bicycle_theft_API" target="_blank">Backend - API</MenuItem>
            <MenuItem eventKey={3.3} href="https://github.com/Zak-Kent/Bicycle_theft_project" target="_blank">Data ETL</MenuItem>
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



