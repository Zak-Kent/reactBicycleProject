"use strict";

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


export function HttpButton(props) {
  let buttonText = "Search for bicycle racks";

  // needed to add the style=cursor: 'pointer' to get the button onClick call to fire on mobile
  return (
    <ButtonGroup vertical block style={{padding: "5px 0px"}}>
      <Button bsStyle="danger" style={{cursor:"pointer"}} onClick={() => props.onClick()}>{buttonText}</Button>
    </ButtonGroup>
  );
}














