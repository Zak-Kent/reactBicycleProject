"use strict";

import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';


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
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{streetViewControl: false, mapTypeControl: false}}>
            { markers }
          </GoogleMap>
        } />
    )
  }
}

export default Map
