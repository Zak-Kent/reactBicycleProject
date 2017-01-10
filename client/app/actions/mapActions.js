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
        }
      }
    }) 
  }
}