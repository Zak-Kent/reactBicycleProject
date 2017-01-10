"use strict";

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


export function HttpButton(props) {
  return (
  	<ButtonGroup vertical block>
    	<Button bsStyle="danger" onClick={() => props.onClick()}>API call bicycles</Button>
    </ButtonGroup>
  );
}














