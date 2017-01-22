"use strict";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

import { getMapRef, calcNewMapBounds } from '../actions/mapActions.js';
import { sortRacks } from '../actions/utility.js';
import store from '../store.js';

@connect((store) => {
  return {
    gmap: store.gMapObj
  }
})
class Map extends Component {

  render() {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

    // sort markers and assign different colored icons based on realtive theft score 
    let sortedMarkers = sortRacks(this.props.markers);

    // push center marker into sorted array 
    sortedMarkers.push(this.props.centerMarker)

    // map through sorted marker array and make needed marker components 
    const markers = sortedMarkers.map((rack, idx) => {

      const marker = {
        position: {
          lat: rack.lat, 
          lng: rack.lng
        }, 
        icon: rack.icon
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
