"use strict";

import React, { Component } from 'react';
import { connect } from "react-redux";
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

import { getMapRef } from '../actions/mapActions.js';
import store from "../store.js";

@connect((store) => {
  return {
    gmap: store.gMapObj
  }
})
class Map extends Component {

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
            // need to grab a reference to Gmap so you can access its methods from store 
            ref={(googleMap) => {
              if(!googleMap) {
                return;
              }
              this.props.dispatch(getMapRef(googleMap.props.map))
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
