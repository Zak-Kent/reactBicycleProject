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

export function getMapCenter() {
  let center = navigator.geolocation.getCurrentPosition((pos) => {
    const coords = pos.coords;

    return coords;
  })
}

export function mapDragAction(gMapObj) {


  // this is only grabbing the center at the users location not the new center of the map 
  // that's why the map keeps recentering. need to find a way to grad the center of the map object. 


  return function(dispatch) {
    console.log("inside map drag event")

    dispatch({ 
      type: "CHANGE_MAP_CENTER",
      payload: {
        gMapObj: gMapObj
      }
    }) 


  }
}