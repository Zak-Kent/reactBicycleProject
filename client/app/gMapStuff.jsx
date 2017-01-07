"use strict";

import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';


// ************************************************************
// try connecting this component to the store and when it recives that instance of the map
// obj it can dispatch and action to update the store with the gmap obj
// then you just need to find a way to make the component refresh on dragend and it should grab a new ref
// everytime 


class Map extends Component {

  constructor() {
    super();
    this.state = {
      gmap: null
    }
  }

  insideOnMove(gmap) {
    console.log("888888888888888888888888")
    console.log("gmap insided on move", this.state.gmap)

  }

  // trying to force map to update every time it moves, causes browser to crash and blows stack 
  // was calling inside onDragend
  testMethod() {
    this.forceUpdate()
  }

  render() {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

    const markers = this.props.markers.map((rack, idx) => {

      const marker = {
        position: {
          lat: rack.geom.coordinates[1], 
          lng: rack.geom.coordinates[0]
        }
      }

      return <Marker key={rack.id} {...marker} /> 
    })

    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap 

            // ref is only getting run once when react renders map, I need this to be rerun everytime map moves 
            // in order to grab an instance of the map at a new location 

            ref={(googleMap) => {
              if(!googleMap) {
                console.log("inside ref no googleMap")
                return;
              }
              console.log("ref returned googleMap", googleMap)
              this.gmap = googleMap
            }}


            defaultZoom={15}
            center={this.props.center}
            onDragend={this.props.dragEnd}
            options={{streetViewControl: false, mapTypeControl: false}}>
            { markers }
          </GoogleMap>
        } />
    )
  }
}

export default Map
