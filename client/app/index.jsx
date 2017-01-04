"use strict";

import React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";
import store from "./store.js";

import { httpRecurse, HttpButton } from "./apiCallStuff.jsx";
import Map from "./gMapStuff.jsx";

import { testAction } from "./actions/firstActions.js";

// used by redux to connect store to a component 
@connect((store) => {
  return {
    center: store.center,
    bikeRacks: store.bikeRacks
  }
})
class App extends React.Component {

  apiCall () {
    // need to find a better way to manage state when making recursive api calls, probably redux

    let url =  'https://totalgood.org/bicycle/?dist=150&format=json&point=-122.678713,45.514798'
    let finalArray = httpRecurse(url)

    console.log("inside app component value of final array", finalArray);
  }

  testAction() {
    this.props.dispatch(testAction())
  } 

  render () {

    console.log("value of redux store inside app render", this.props)

    return ( 
      <div>
        <p>Hello from React!</p>
        <div style={{width:"500px", height:"500px", background:"red"}}>
          <Map center={this.props.center} markers={this.props.bikeRacks}/>
          <HttpButton onClick={() => this.testAction()} />
        </div>
      </div>
    );
  }
}


const app = document.getElementById('app');

render(<Provider store={store}>
  <App/>
  </Provider>, app);
