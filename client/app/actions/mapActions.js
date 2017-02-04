"use strict";

import { locationCheck } from "./utility.js";


export function userCenterAction() {

  return function(dispatch) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords; 

      // returns T/F if user is inside the usable bounds of data 
      let insidePortland = locationCheck(coords.latitude, coords.longitude);

      dispatch({
        type: "INSIDE_PORTLAND",
        payload: {
          insidePortland: insidePortland
        }
      })

      dispatch({ 
        type: "GET_USER_LOCATION",
        payload: {
          center: {
            lat: coords.latitude, 
            lng: coords.longitude
          }, 
          centerMarker: {
            id: 0, 
            lat: coords.latitude,
            lng: coords.longitude,
            icon: './src/icons/bicycle-store.svg'
            }
        }
      }) 
    })
  }
}

export function getMapRef(mapRef) {
  return {
    type: "GET_MAP_REF", 
    payload: mapRef
  }
}

export function mapDragAction(coords) {

  return function(dispatch) {

    dispatch({ 
      type: "CHANGE_MAP_CENTER",
      payload: {
        center: {
          lat: coords.lat,
          lng: coords.lng
        },
        centerMarker: {
        id: 0, 
        lat: coords.lat,
        lng: coords.lng,
        icon: './src/icons/bicycle-store.svg'
        }
      }
    }) 
  }
}

export function calcNewMapBounds(markers, gMapObj) {
  // use marker coords to zoom fit map to markers
  
  if (markers.length === 0 || gMapObj === null) {
    return
  }

  let copyMarkers = markers.slice();
  let latlngList = [];
  let bounds = new google.maps.LatLngBounds();

  let markIdx = markers.length;
  let boundIdx;
  let coordinate;

  while(markIdx--) {
    coordinate = copyMarkers[markIdx].geom.coordinates
    latlngList.push(new google.maps.LatLng (coordinate[1], coordinate[0]));
  }

  boundIdx = latlngList.length;

  while(boundIdx--) {
    bounds.extend(latlngList[boundIdx]);
  }

  gMapObj.fitBounds(bounds);

}









