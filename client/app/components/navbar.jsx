"use strict";

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Popover, OverlayTrigger } from 'react-bootstrap';



const popoverBottom = (
  <Popover id="popover-trigger-click-root-close" title="Project Description">
    This is a demo app that displays data about the relative safety of one bicycle rack vs. another in Portland. 
    The data and a more detailed description of this project and the processes used to create it can be found by 
    following the links in the Project Code dropdown. This was a learning project with the purpose of providing cyclists in 
    Portland with a convenient way to make informed decisions about where to park their bicycles. The data for this project
    was gathered using open source theft and GIS data provided by the city of Portland and Portland Atlas. The API for 
    this project is being graciously hosted by TotalGood at <a href="https://totalgood.org/bicycle/">https://totalgood.org/bicycle/</a>.     
  </Popover>
);

const mapKeyPopoverBottom = (
  <Popover id="popover-trigger-click-root-close" title="Map Key">
    The bicycle icon represents the center of the search location and is moved automatically every time the map is repositioned. 
    In its current state the app will return the 30 closest bicycle racks to the search location and represent them using 
    markers. These markers are color coded by the relative safety of each rack to one another. 
    <div><img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png"/>Safest</div> 
    <div><img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"/>Middle of range</div> 
    <div><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"/>Least safe</div> 
    It is important to note that these colors are determined based on only the currently visible racks on the map. 
    If you move the map to a nearby location and new racks are found, the colors of the shown markers will be 
    adjusted to reflect the new mix of safety scores from all visible racks. 
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
          <OverlayTrigger container={this} trigger="click" rootClose placement="bottom" overlay={popoverBottom}>
            <NavItem eventKey={1} href="#">About</NavItem>
          </OverlayTrigger>
          <OverlayTrigger container={this} trigger="click" rootClose placement="bottom" overlay={mapKeyPopoverBottom}>
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



