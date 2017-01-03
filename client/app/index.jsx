"use strict";

import React from 'react';
import {render} from 'react-dom';

import { httpRecurse, HttpButton } from './apiCallStuff.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jsonData: null
    }
  }

  apiCall () {

    let url =  'https://totalgood.org/bicycle/?dist=150&format=json&point=-122.678713,45.514798'
    let finalArray = httpRecurse(url)

  }

  render () {
    return ( 
      <div>
        <p>Hello from React!</p>
        <HttpButton onClick={() => this.apiCall()} />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));
