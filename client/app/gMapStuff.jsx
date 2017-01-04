"use strict";

import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';


class Map extends Component {
  render() {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>


    console.log(this.props.markers)
    const markers = this.props.markers.map((rack, idx) => {

      const marker = {
        position: {
          lat: rack.location.lat, 
          lng: rack.location.lng
        }
      }

      return <Marker key={rack.id} {...marker} /> 
    })

    console.log(markers)

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
