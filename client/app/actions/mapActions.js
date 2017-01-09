"use strict";

export function userCenterAction() {

  return function(dispatch) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords; 

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