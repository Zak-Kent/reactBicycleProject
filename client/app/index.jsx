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
      bikeRacks: [
        {
            "id": 605,
            "geom": {
                "type": "Point",
                "coordinates": [
                    -122.67870784036258,
                    45.51479513525199,
                    0.0
                ]
            },
            "theft_prob_per_bike_day_x_1000": "0.26570381"
        },
        {
            "id": 921,
            "geom": {
                "type": "Point",
                "coordinates": [
                    -122.67852660605533,
                    45.51511959277659,
                    0.0
                ]
            },
            "theft_prob_per_bike_day_x_1000": "0.68703283"
        }
      ]
    }
  }

  apiCall () {
    // need to find a better way to manage state when making recursive api calls, probably redux

    let url =  'https://totalgood.org/bicycle/?dist=150&format=json&point=-122.678713,45.514798'
    let finalArray = httpRecurse(url)

    console.log("inside app component value of final array", finalArray);

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
