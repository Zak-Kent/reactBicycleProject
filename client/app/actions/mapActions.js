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


export function calcNewMapBounds(markers, gMapObj) {

  console.log("inside calcNewMapBounds!")

  if (gMapObj === null) {
    console.log("map object is null inside calcNewMapBounds")
    return
  }

  
  console.log("markers and map instance", markers, gMapObj)

  let copyMarkers = markers.slice();
  let latlngList = [];
  let bounds = new google.maps.LatLngBounds();

  let markIdx = markers.length;
  let boundIdx;
  let coordinate;

  while(markIdx--) {
    coordinate = copyMarkers[markIdx].coordinates
    latlngList.push(new google.maps.LatLng (coordinate[1], coordinate[0]));
  }

  boundIdx = latlngList.length;

  while(boundIdx--) {
    bounds.extend(latlngList[boundIdx]);
  }

  gMapObj.fitBounds(bounds);



}

// var venues = this.props.venues;
//     var latlngList = [];
//     var bounds = new google.maps.LatLngBounds();
//     var l = venues.length;
//     var lL;
//     var coordinate;

//     while (l--) {
//       coordinate = venues[l].coordinate;
//       latlngList.push(new google.maps.LatLng (coordinate[1],coordinate[0]));
//     }

//     lL = latlngList.length;

//     while (lL--) {
//       bounds.extend(latlngList[lL]);
//     }

//     this.refs.map.fitBounds(bounds);








