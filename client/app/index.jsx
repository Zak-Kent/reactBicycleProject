"use strict";

import React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";
import store from "./store.js";

import { HttpButton } from "./components/buttons.jsx";
import Map from "./components/gMap.jsx";
import { MyNavBar } from "./components/navbar.jsx";

import { racksApiCall } from "./actions/apiActions.js";
import { userCenterAction, getMapCenter, mapDragAction, calcNewMapBounds } from "./actions/mapActions.js";


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
    // grab center of map, make API call with center coords, zoom fit map to markers
    let lat = this.props.center.lat;
    let lng = this.props.center.lng;  

    let url =  `/proxy?url=https://totalgood.org/bicycle/sorted/?format=json&point=${lng},${lat}`

    this.props.dispatch(racksApiCall(url)).then(() => {
      // zoom fit map to new bounds of markers after they're returned
      calcNewMapBounds(this.props.bikeRacks, this.props.gmap)
    })
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
      <div style={{background:"black"}}>
        <MyNavBar /> 
        <div style={{width:"100%", height:"95%", margin: "auto", padding: "0px 0px 60px 0px"}}>
          <Map center={this.props.center} markers={this.props.bikeRacks} dragEnd={() => this.dragEnd()} />
          <HttpButton onClick={() => this.apiAction()} mapMoved={this.props.mapMoved}/>
        </div>
      </div>
    );
  }
}


const app = document.getElementById('app');

render(<Provider store={store}>
  <App/>
  </Provider>, app);
