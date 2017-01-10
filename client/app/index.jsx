"use strict";

import React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";
import store from "./store.js";

import { HttpButton } from "./components/buttons.jsx";
import Map from "./components/gMap.jsx";

import { racksApiCall } from "./actions/apiActions.js";
import { userCenterAction, getMapCenter, mapDragAction } from "./actions/mapActions.js";

// used by redux to connect store to a component 
@connect((store) => {
  return {
    center: store.userCenter,
    bikeRacks: store.bikeRacks,
    mapMoved: store.mapMoved,
    movedCenter: store.movedCenter,
    gmap: store.gMapObj
  }
})
class App extends React.Component {

  componentWillMount() {
    console.log("componentWillMount")

    if(navigator.geolocation) {
      // action gets user location from navigator and updates store 
      this.props.dispatch(userCenterAction())
    }
  }

  apiAction() {

    let lat = this.props.center.lat;
    let lng = this.props.center.lng; 


    console.log("api call", lat, lng) 

    let url =  `https://totalgood.org/bicycle/?dist=500&format=json&point=${lng},${lat}`

    console.log(url)
    this.props.dispatch(racksApiCall(url))
  } 

  dragEnd() {
    let lat = this.props.gmap.getCenter().lat();
    let lng = this.props.gmap.getCenter().lng();

    let newCoords = {lat, lng}
    this.props.dispatch(mapDragAction(newCoords))
  }

  render () {
    // console.log("value of redux store inside app render", this.props)

    return ( 
      <div>
        <p>Hello from React!</p>
        <div style={{width:"500px", height:"500px", background:"red"}}>
          <Map center={this.props.center} markers={this.props.bikeRacks} dragEnd={() => this.dragEnd()} />
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
