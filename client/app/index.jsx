"use strict";

import React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";
import store from "./store.js";

import { HttpButton } from "./apiCallStuff.jsx";
import Map from "./gMapStuff.jsx";

import { racksApiCall } from "./actions/apiActions.js"

// used by redux to connect store to a component 
@connect((store) => {
  return {
    center: store.center,
    bikeRacks: store.bikeRacks
  }
})
class App extends React.Component {

  apiAction() {
    let url =  'https://totalgood.org/bicycle/?dist=150&format=json&point=-122.678713,45.514798'
    this.props.dispatch(racksApiCall(url))
  } 

  render () {

    // console.log("value of redux store inside app render", this.props)

    return ( 
      <div>
        <p>Hello from React!</p>
        <div style={{width:"500px", height:"500px", background:"red"}}>
          <Map center={this.props.center} markers={this.props.bikeRacks}/>
          <HttpButton onClick={() => this.apiAction()} />
        </div>
      </div>
    );
  }
}


const app = document.getElementById('app');

render(<Provider store={store}>
  <App/>
  </Provider>, app);
