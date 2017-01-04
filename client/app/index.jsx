"use strict";

import React from 'react';
import {render} from 'react-dom';

import { httpRecurse, HttpButton } from './apiCallStuff.jsx';
import Map from './gMapStuff.jsx';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      center: {
        lat: 45.521, 
        lng: -122.673
      },
      bikeRacks: [],
      markers: {
        racks: [
          {
            location: {
              lat: 45.521, 
              lng: -122.673
            }, 
            id: 55
          }
        ]
      }
    }
  }

  apiCall () {

    let url =  'https://totalgood.org/bicycle/?dist=150&format=json&point=-122.678713,45.514798'
    httpRecurse(url)
    .then((data) => {
      this.setState({
        bikeRacks: data
      })
    })

    console.log("inside app component value of final array", this.state.bikeRacks);

  }

  render () {

    console.log("value of state inside app render", this.state)


    return ( 
      <div>
        <p>Hello from React!</p>
        <div style={{width:"500px", height:"500px", background:"red"}}>
          <Map center={this.state.center} markers={this.state.bikeRacks}/>
        </div>
        <HttpButton onClick={() => this.apiCall()} />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));
