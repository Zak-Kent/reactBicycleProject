"use strict";

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


export function HttpButton(props) {
  let buttonText; 

  if (props.mapMoved) {
    buttonText = "Redo search in this area"
  } else {
    buttonText = "Search for bicycle racks"
  }

  // needed to add the style=cursor: 'pointer' to get the button onClick call to fire on mobile
  return (
    <ButtonGroup vertical block>
      <Button bsStyle="danger" style={{cursor:'pointer'}} onClick={() => props.onClick()}>{buttonText}</Button>
    </ButtonGroup>
    // <button  onClick={() => props.onClick()}>{buttonText}</button>
  );
}














