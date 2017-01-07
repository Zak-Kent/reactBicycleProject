"use strict";

export function userCenterAction() {

  return function(dispatch) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords 

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