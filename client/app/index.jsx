"use strict";

import React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";
import store from "./store.js";

import { HttpButton } from "./components/buttons.jsx";
import Map from "./components/gMap.jsx";
import { MyNavBar } from "./components/navbar.jsx";

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
    // method for making api call, need to add different logic to API and then change 
    // way the url is made. 

    let lat = this.props.center.lat;
    let lng = this.props.center.lng;  

    let url =  `https://totalgood.org/bicycle/?dist=500&format=json&point=${lng},${lat}`

    this.props.dispatch(racksApiCall(url))
  } 

  dragEnd() {
    // method needs to be passed down to map component so it can fire and update store
    // using ref to map object when map is dragged 

    let lat = this.props.gmap.getCenter().lat();
    let lng = this.props.gmap.getCenter().lng();

    let newCoords = {lat, lng}
    this.props.dispatch(mapDragAction(newCoords))
  }

  render () {
    return ( 
      <div>
        <MyNavBar /> 
        <div style={{width:"90%", height:"90%", background:"red", margin: "auto"}}>
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
